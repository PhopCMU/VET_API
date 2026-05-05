import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/cmuvc";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import {
  StudentCreateProps,
  StudentDataInterface,
} from "../../../model/cmuvc/ParticipantModel";
import { createLogger, Logger, transports } from "winston";

const prisma = new PrismaClient();

const logger: Logger = createLogger({
  level: "info",
  transports: [
    new transports.File({ filename: "logs/cmuvc/delete.log" }),
    new transports.Console(),
  ],
});

const Title = "ADMIN DASHBOARD][CMUVC][STUDENT";

export const Role_Fetch_Students = async ({
  jwt,
  request,
  set,
}: Context & { jwt: any; request: any; set: any }) => {
  try {
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

    const query = await prisma.students.findMany({
      orderBy: [{ createAt: "asc" }, { studentCode: "asc" }],
    });
    console.info(`[${Title}]  Fetch Students successfully`);
    set.status = 200;
    return {
      success: true,
      message: "Fetch Students successfully",
      data: query,
    };
  } catch (error: any) {
    console.error(
      `[${Title}] Error in ParticipantList_All: ${error.message}\nStack: ${error.stack}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}] students process completed`);
    console.info("─".repeat(20));
  }
};

export const Role_Create_Student = async ({
  body,
  jwt,
  request,
  set,
}: Context & {
  body: StudentCreateProps;
  jwt: any;
  request: any;
  set: any;
}) => {
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    const decodeEndcypto = decryptMiddleware(body.encryptedData);
    const decryptedData = decodeEndcypto as StudentDataInterface;

    const { studentCode, prefix, fname, lname, level } = decryptedData;

    const checkName = await prisma.students.findFirst({
      where: {
        studentCode: studentCode,
        fname: fname,
        lname: lname,
      },
    });

    if (checkName) {
      console.error(`[${Title}] Student already exists`);
      set.status = 400;
      return {
        success: false,
        message: "Student already exists",
      };
    }

    const query = await prisma.students.create({
      data: {
        studentCode: studentCode ?? "",
        prefix: prefix,
        fname: fname,
        lname: lname,
        level: level,
        createAt: new Date(),
      },
    });

    if (query) {
      set.status = 201;
      console.info(`[${Title}]  Create Student successfully`);
      return {
        success: true,
        message: "Create Student successfully",
      };
    }
  } catch (error: any) {
    console.error(
      `[${Title}] Error in ParticipantList_All: ${error.message}\nStack: ${error.stack}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}] students process completed`);
    console.info("─".repeat(20));
  }
};

export const Role_Update_Student = async ({
  request,
  query,
  set,
  jwt,
}: Context & { request: any; query: any; set: any; jwt: any }) => {
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    if (!query.encryptedData) {
      console.error(`[${Title}] Missing encrypted data in query`);
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = decodeURIComponent(query.encryptedData);
    const decryptedData: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(`[${Title}] Failed to decrypt data: ${decryptedData}`);
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const edit = await prisma.students.update({
      where: {
        studentId: decryptedData.accountId,
        studentCode: decryptedData.studentCode,
      },
      data: {
        prefix: decryptedData.prefix,
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        level: decryptedData.level,
        updateAt: new Date(),
      },
    });

    if (edit) {
      console.info(`[${Title}]  Update Student successfully`);
      set.status = 201;
      return {
        success: true,
        message: "Update Student successfully",
      };
    }
  } catch (error: any) {
    console.error(
      `[${Title}] Error in StudentList: ${error.message}\nStack: ${error.stack}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}] [STUDENTLIST] process completed`);
    console.info("─".repeat(20));
  }
};

export const Role_Delete_Student = async ({
  request,
  query,
  set,
  jwt,
}: Context & { request: any; query: any; set: any; jwt: any }) => {
  try {
    const authToken = request.headers.get("Authorization") ?? "";
    const authention = await CheckJWTAuthention(authToken, jwt, set);

    if (!authention.success) {
      console.error(`[${Title}] AUTH_FAILED `);
      set.status = 401;
      return {
        success: false,
        message: "Authentication failed",
      };
    }

    if (!query.encryptedData) {
      console.error(`[${Title}] Missing encrypted data in query`);
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = decodeURIComponent(query.encryptedData);
    const decryptedData: any = decryptMiddleware(decodedEncryptedData);

    if (!decryptedData) {
      console.error(`[${Title}] Failed to decrypt data: ${decryptedData}`);
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const deleteStudent = await prisma.students.delete({
      where: {
        studentId: decryptedData,
      },
    });

    if (deleteStudent) {
      console.info(`[${Title}]  Delete Student successfully`);
      logger.info(`Delete Student successfully`, {
        Title: "[DELETE_STUDENT]",
        Admin_Name:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
        Delete_User: deleteStudent.fname + " " + deleteStudent.lname,
      });
      set.status = 200;
      return {
        success: true,
        message: "Delete Student successfully",
      };
    }
  } catch (error: any) {
    console.error(
      `[${Title}] Error in Student: ${error.message}\nStack: ${error.stack}`,
    );
    set.status = 500;
    return {
      success: false,
      message: "An error occurred on the server.",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}] [Student] process completed`);
    console.info("─".repeat(20));
  }
};
