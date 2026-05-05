import { Context } from "elysia";
import { PrismaClient } from "../../../generated/role";
import { MenuModel, SubMenuModel } from "../../model/role/MenuModel";
import { CheckJWTAuthention } from "../../services/CheckJWTService";
import { createPartLogger } from "./../../../utils/Logger";
import { rateLimitByIp, getClientIp } from "../../utils/rateLimiter";
import { decryptMiddleware } from "../../middleware/decryptMiddleware";

const prisma = new PrismaClient();

const menuLogger = createPartLogger("/Role/menu");
export const MenuController = async (set: any) => {
  const Title = "MENU_LIST";

  try {
    const response = await prisma.menu.findMany({
      include: {
        subMenus: {
          orderBy: {
            position: "asc",
          },
        },
      },
      orderBy: {
        position: "asc",
      },
    });

    console.log(`[${Title}]  SUCCESS | Found ${response.length} menus`);
    set.status = 200;
    return response;
  } catch (error: any) {
    console.error(`[${Title}]  Menu fetch failed: ${error.message}`);
    if (error.response) {
      console.error(
        `[${Title}]  Error details: ${JSON.stringify(error.response)}`,
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "Menu fetch failed",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.debug(`[${Title}]  process completed `);
    console.info("─".repeat(20));
  }
};

export const AddMenuController = async ({
  body,
  set,
  request,
  jwt,
}: Context & { body: MenuModel; jwt: any }) => {
  const action = "ADD_MENU";

  try {
    // Extract token
    const clientIp = getClientIp(request) || "unknown";
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      const userAgent = request.headers.get("user-agent") || "unknown";
      const userId =
        authention.data?.firstname_EN + " " + authention.data?.lastname_EN ||
        "unknown";

      menuLogger.warn(
        `AUTH_FAILED - action=${action}, remoteAddr=${clientIp}, userAgent=${userAgent}, userId=${userId}`,
      );

      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    const { icon, name, part, position } = body;

    // Create menu
    const result = await prisma.menu.create({
      data: {
        icon,
        name,
        part,
        position,
      },
    });

    // Log success
    menuLogger.info(
      `MENU_CREATED | action=${action} | remoteAddr=${clientIp} | createdBy=${authention.data.firstname_EN} ${authention.data.lastname_EN} | menuId=${result.menuId} | name=${result.name}`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Menu created successfully",
      data: {
        menuId: result.menuId,
        name: result.name,
        createdAt: result.createdAt,
      },
    };
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      body,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    menuLogger.error("Failed to create menu", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to create menu",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `Add menu process completed | action=${action} | durationMs=${
        Date.now() - new Date().getTime()
      }`,
    );
  }
};

export const SubMenuController = async ({
  body,
  set,
  request,
  jwt,
}: Context & { body: SubMenuModel; jwt: any }) => {
  const action = "ADD_SUBMENU";
  const clientIp = getClientIp(request) || "unknown";

  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      menuLogger.warn(
        `AUTHENTICATION_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
      );

      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    const { icon, name, part, position, menuId } = body;

    // สร้าง submenu
    const result = await prisma.subMenu.create({
      data: {
        icon,
        name,
        part,
        position,
        menuId,
      },
    });

    // Log ผลลัพธ์
    menuLogger.info(
      `Submenu created successfully | action=${action} | submenuId=${result.submenuId} | name=${result.name} | createdBy=${authention.data.firstname_EN} ${authention.data.lastname_EN} | status=SUCCESS`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Submenu created successfully",
      data: {
        submenuId: result.submenuId,
        name: result.name,
        createdAt: result.createdAt,
      },
    };
  } catch (e: any) {
    // Log ข้อผิดพลาดพร้อม context และ stack trace
    const errorContext = {
      action,

      body,
      userId: e?.data?.userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    menuLogger.error("Failed to create submenu", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to create submenu",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Log เมื่อกระบวนการเสร็จสิ้น (ใช้สำหรับ debugging)
    console.debug(
      `Add submenu process completed | action=${action} | durationMs=${
        Date.now() - new Date().getTime()
      }`,
    );
  }
};

export const RemoveMenuController = async ({
  params,
  set,
  jwt,
  request,
}: Context & { jwt: any }) => {
  const Action = "DELETE_MENU";
  const clientIp = getClientIp(request) || "unknown";

  try {
    const { menuId } = params;

    // 🟨 Validate UUID
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(menuId)) {
      menuLogger.warn("Invalid menuId format", {
        action: Action,
        menuId,
        status: "VALIDATION_FAILED",
        reason: "Invalid UUID format",
      });

      set.status = 400;
      return { error: "Invalid menuId: Must be a valid UUID" };
    }

    // 🔐 Authentication
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      menuLogger.warn(
        `Authentication failed | action=${Action} | menuId=${menuId} | status=UNAUTHORIZED | ip=${clientIp} | userAgent=${request.headers.get("user-agent")} | userId=${authention.data.userId || "unknown"}`,
      );

      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    const { firstname_EN, lastname_EN } = authention.data;
    const deletedBy = `${firstname_EN} ${lastname_EN}`;

    // 🗑️ Delete menu
    const removed = await prisma.menu.delete({
      where: {
        menuId: menuId,
      },
    });

    // ✅ Success log
    menuLogger.info(
      `Menu Removed successfully | action=${Action} | menuId=${removed.menuId} | menuName=${removed.name} | deletedBy=${deletedBy} | status=SUCCESS`,
    );

    set.status = 200;
    return {
      success: true,
      message: "Menu Removed successfully",
    };
  } catch (error: any) {
    const isRecordNotFound = error.code === "P2025"; // Prisma: Record not found
    set.status = isRecordNotFound ? 404 : 500;

    const errorMessage = isRecordNotFound
      ? "Menu not found"
      : "Failed to delete menu";

    menuLogger.error(
      `Menu deletion failed | action=${Action} | menuId=${
        params.menuId
      } | status=ERROR | errorCode=${error.code || "UNKNOWN"} | message=${
        error.message
      } | stack=${
        error.stack?.split("\n").slice(0, 5).join(" | ") || "No stack"
      }`,
    );

    return {
      success: false,
      message: errorMessage,
      ...(isRecordNotFound
        ? { error: "Menu not found" }
        : { error: error.message }),
    };
  } finally {
    await prisma.$disconnect();

    // 🧹 Final log
    console.debug(
      `Delete menu process completed | action=${Action} | status=COMPLETED | durationMs=${
        Date.now() - new Date().getTime()
      }`,
    );
  }
};

export const RemoveSubMenuController = async ({
  params,
  set,
  jwt,
  request,
}: Context & { jwt: any }) => {
  const Title = "Menu";
  const action = "DELETE_SUBMENU";

  try {
    const { submenuId } = params;

    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(submenuId)) {
      set.status = 400;
      return { error: "Invalid submenuId: Must be a valid UUID" };
    }

    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);
    if (!authention.success) {
      console.error(`[${Title}]  AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }
    const remove = await prisma.subMenu.delete({
      where: {
        submenuId: submenuId,
      },
    });

    menuLogger.info("Submenu Removed successfully", {
      action,
      menuId: remove.menuId,
      name: remove.name,
      removeBy: `${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
      status: "SUCCESS",
    });

    set.status = 200;
    return {
      success: true,
      message: "Submenu Removed successfully",
      data: {
        submenuid: remove.submenuId,
        name: remove.name,
      },
    };
  } catch (error: any) {
    console.error(`[${Title}]  Removed submenu failed: ${error.message}`);
    if (error.response) {
      console.error(
        `[${Title}]  Error details: ${JSON.stringify(error.response)}`,
      );
    }
    set.status = 500;
    return {
      success: false,
      message: "Failed to remove submenu",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}]  process completed`);
    console.info("─".repeat(20));
  }
};

export const EditMenuController = async ({
  query,
  request,
  set,
  jwt,
}: Context & { query: any; request: any; set: any; jwt: any }) => {
  const action = "MENU_EDIT";

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
    menuLogger.warn(
      `AUTH_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    menuLogger.warn(
      `MISSING_ENCRYPTED_DATA | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }

  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData);
  if (!decryptedData) {
    menuLogger.warn(
      `DECRYPT_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Failed to decrypt data",
    };
  }

  try {
    const editMenu = await prisma.menu.update({
      where: {
        menuId: decryptedData.menuId,
      },
      data: {
        name: decryptedData.name,
        icon: decryptedData.icon,
        part: decryptedData.part,
        position: parseInt(decryptedData.position),
      },
    });

    if (editMenu) {
      menuLogger.info(
        `EDIT_MENU_SUCCESS | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN} | menuId=${editMenu.menuId} | name=${editMenu.name} | icon=${editMenu.icon} | part=${editMenu.part} | position=${editMenu.position}`,
      );

      set.status = 200;
      return {
        success: true,
        message: "Edit Menu success",
        data: editMenu,
      };
    }
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      query,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    menuLogger.error("Failed to Edit logo", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to Edit logo",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `process completed | action=${action} | durationMs=${Date.now() - new Date().getTime()} | remoteAddr=${clientIp}`,
    );
  }
};

export const EditSubMenuController = async ({
  query,
  request,
  set,
  jwt,
}: Context & { query: any; request: any; set: any; jwt: any }) => {
  const action = "SUBMENU_EDIT";

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
    menuLogger.warn(
      `AUTH_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 401;
    return {
      success: false,
      message: "Authentication failed",
    };
  }

  if (!query.encryptedData) {
    menuLogger.warn(
      `MISSING_ENCRYPTED_DATA | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Missing encrypted data",
    };
  }
  const decodedEncryptedData = decodeURIComponent(query.encryptedData);
  const decryptedData = decryptMiddleware(decodedEncryptedData);
  if (!decryptedData) {
    menuLogger.warn(
      `DECRYPT_FAILED | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN}`,
    );

    set.status = 400;
    return {
      success: false,
      message: "Failed to decrypt data",
    };
  }

  try {
    const editSubMenu = await prisma.subMenu.update({
      where: {
        submenuId: decryptedData.submenuId,
        menuId: decryptedData.menuId,
      },
      data: {
        name: decryptedData.name,
        icon: decryptedData.icon,
        part: decryptedData.part,
        position: parseInt(decryptedData.position),
      },
    });

    if (editSubMenu) {
      menuLogger.info(
        `EDIT_SUBMENU_SUCCESS | action=${action} | remoteAddr=${clientIp} | userId=${authention.data.firstname_EN} ${authention.data.lastname_EN} | name=${editSubMenu.name} | icon=${editSubMenu.icon} | part=${editSubMenu.part} | position=${editSubMenu.position}`,
      );

      set.status = 200;
      return {
        success: true,
        message: "Edit Submenu success",
        data: editSubMenu,
      };
    }
  } catch (e: any) {
    // Log error with context
    const errorContext = {
      action,
      query,
      userId: (e as any).userId || "unknown",
      stack: e.stack,
      ...(e.response && { response: e.response }),
    };

    menuLogger.error("Failed to Edit submenu", errorContext);

    set.status = 500;
    return {
      success: false,
      message: "Failed to Edit submenu",
      error: e.message,
    };
  } finally {
    await prisma.$disconnect();

    // Optional: log ทุกครั้งที่เสร็จกระบวนการ
    console.debug(
      `process completed | action=${action} | durationMs=${Date.now() - new Date().getTime()} | remoteAddr=${clientIp}`,
    );
  }
};
