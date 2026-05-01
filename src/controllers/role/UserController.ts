import { PrismaClient } from "../../../generated/role";
import { Context } from "elysia";
import { generateJwtToken } from "../../utils/jwtUtils";
import { DataITSCRequestProps } from "../../model/role/UserModel";
import { createPartLogger } from "../../../utils/Logger";
import { CheckJWTAuthention } from "../../services/CheckJWTService";
import { rateLimitByIp, getClientIp } from "../../utils/rateLimiter";
import { authenticateOnly } from "../../middleware/authAndDecrypt";

const prisma = new PrismaClient();

const authenLogger = createPartLogger("/Role/authen");

export const AddAccountController = async ({
  body,
  set,
  jwt,
}: Context & { body: DataITSCRequestProps; jwt: any }) => {
  const action = "SIGNIN_USER";

  try {
    const {
      cmuitaccount,
      cmuitaccount_name,
      firstname_EN,
      firstname_TH,
      itaccounttype_EN,
      itaccounttype_TH,
      itaccounttype_id,
      lastname_EN,
      lastname_TH,
      organization_code,
      organization_name_EN,
      organization_name_TH,
      prename_EN,
      prename_TH,
      prename_id,
    } = body;

    // ค้นหาผู้ใช้ทุกสถานะ (เพราะ cmuitaccount มี unique constraint)
    let existingUser = await prisma.user.findFirst({
      where: { cmuitaccount },
    });

    let user;

    if (existingUser) {
      // ถ้ามีผู้ใช้แต่ไม่ active → อัปเดตให้ active
      if (existingUser.status_user !== "active") {
        user = await prisma.user.update({
          where: { userId: existingUser.userId },
          data: {
            status_user: "active",
            updateAt: new Date().toISOString(),
          },
        });
      } else {
        // ถ้า active อยู่แล้ว → ใช้ข้อมูลเดิม
        user = existingUser;
      }
    } else {
      // สร้างผู้ใช้ใหม่
      user = await prisma.user.create({
        data: {
          cmuitaccount,
          cmuitaccount_name,
          firstname_EN,
          firstname_TH,
          itaccounttype_EN,
          itaccounttype_TH,
          itaccounttype_id,
          lastname_EN,
          lastname_TH,
          organization_code,
          organization_name_EN,
          organization_name_TH,
          prename_EN,
          prename_TH,
          prename_id,
          status_user: "active",
          createAt: new Date().toISOString(),
          updateAt: new Date().toISOString(),
        },
      });
    }

    // ดึงข้อมูลผู้ใช้แบบเต็ม (รวม relation) สำหรับ JWT
    const fullUser = await prisma.user.findUnique({
      where: { userId: user.userId },
      include: {
        jobposition: true,
        DepartmentMembership: {
          include: {
            subDepartment: true,
          },
        },
      },
    });

    if (!fullUser) {
      throw new Error("User not found after creation/update");
    }

    // สร้าง JWT token
    const token = await generateJwtToken(jwt, {
      userId: fullUser.userId,
      image: fullUser.image ?? null,
      jobpositionId: fullUser.jobpositionId ?? null,
      cmuitaccount: fullUser.cmuitaccount,
      firstname_EN: fullUser.firstname_EN,
      lastname_EN: fullUser.lastname_EN,
      firstname_TH: fullUser.firstname_TH, // แก้ typo: "frirstname_TH" → "firstname_TH"
      lastname_TH: fullUser.lastname_TH,
      itaccounttype_EN: fullUser.itaccounttype_EN,
      itaccounttype_TH: fullUser.itaccounttype_TH,
      itaccounttype_id: fullUser.itaccounttype_id,
      organization_code: fullUser.organization_code,
      organization_name_EN: fullUser.organization_name_EN,
      organization_name_TH: fullUser.organization_name_TH,
      organization_vet: fullUser.organization_vet ?? null,
      organization_vet_id: fullUser.organization_vet_id ?? null,
      prename_EN: fullUser.prename_EN,
      prename_TH: fullUser.prename_TH,
      prename_id: fullUser.prename_id,
      status_user: fullUser.status_user,
    });

    const isExisting = !!existingUser;
    const userInfo = isExisting
      ? `User reactivated/token generated | ID: ${fullUser.userId}, CMUIT: ${fullUser.cmuitaccount}`
      : `New user created and token generated | ID: ${fullUser.userId}, CMUIT: ${fullUser.cmuitaccount}`;

    authenLogger.info(userInfo);

    set.status = 200;
    return {
      message: isExisting
        ? "User already exists (reactivated if needed), token generated"
        : "User created and token generated",
      token,
      user: {
        userId: fullUser.userId,
        cmuitaccount: fullUser.cmuitaccount,
        firstname_EN: fullUser.firstname_EN,
        lastname_EN: fullUser.lastname_EN,
      },
    };
  } catch (e: any) {
    const errorContext = {
      action,
      cmuitaccount: body.cmuitaccount,
      stack: e.stack,
    };
    authenLogger.error(`[${action}] Signin failed`, errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Signin failed",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();
  }
};

export const FetchUserIdPermissionSuperAdmin = async ({
  request,
  set,
  jwt,
}: Context & { request: any; jwt: any }) => {
  const action = "FETCH_USER_ID_PERMISSION_SUPERADMIN";
  // ✅ ใช้ middleware สำหรับ authentication เท่านั้น (ไม่มี rate limit)
  const authResult = await authenticateOnly(request, set, jwt, action);
  if (!authResult.success) {
    return {
      success: false,
      message: authResult.message,
    };
  }

  try {
    const userId = await prisma.userSuperAdmin.findMany();

    if (userId) {
      set.status = 200;
      return {
        success: true,
        message: "Success",
        ids: userId,
      };
    }
  } catch (error: any) {
    authenLogger.warn(
      `AUTH_FAILED | action=FCTEH_USER_LIST | remoteAddr=${
        getClientIp(request) || "unknown"
      } | userId=${authResult.data?.firstname_EN} ${
        authResult.data?.lastname_EN
      }`,
    );
  } finally {
    await prisma.$disconnect();
  }
};

export const FetchUsersList = async ({
  request,
  set,
  jwt,
}: Context & { request: any; jwt: any }) => {
  const action = "FCTEH_USER_LIST";
  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    return {
      success: false,
      message: rateLimitResult.message,
    };
  }

  const clientIp = getClientIp(request) || "unknown";

  const authToken = request.headers.get("Authorization") ?? "";
  const authention = await CheckJWTAuthention(authToken, jwt, set);

  if (!authention.success) {
    authenLogger.warn(
      `AUTH_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 401;
    return {
      success: false,
      message: "Unauthorized",
    };
  }

  try {
    const users = await prisma.user.findMany({
      include: {
        jobposition: true,
        DepartmentMembership: {
          include: {
            subDepartment: {
              include: {
                mainDepartment: true,
              },
            },
          },
        },
      },
    });
    if (users) {
      set.status = 200;
      return {
        success: true,
        message: "Success",
        data: users,
      };
    }
  } catch (error: any) {
    authenLogger.error(
      ` FCTEH_USER_LIST failed | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN} | stack=${error.stack}${
        error.response ? ` | response=${JSON.stringify(error.response)}` : ""
      }`,
    );
  } finally {
    await prisma.$disconnect();
    console.debug(
      `process completed | action=FCTEH_USER_LIST | durationMs=${
        Date.now() - new Date().getTime()
      }`,
    );
  }
};
