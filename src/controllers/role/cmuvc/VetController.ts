import { Context } from "elysia";
import { PrismaClient } from "../../../../generated/cmuvc";
import { CheckJWTAuthention } from "../../../services/CheckJWTService";
import { decryptMiddleware } from "../../../middleware/decryptMiddleware";
import {
  VetCreateProps,
  VetDataInterface,
} from "../../../model/cmuvc/ParticipantModel";

import { createPartLogger } from "../../../../utils/Logger";

const prisma = new PrismaClient();

const Logger = createPartLogger("/Role/cmuvc");

const Title = "ADMIN DASHBOARD][CMUVC][VET";

export const Role_Fetch_Vet = async ({
  jwt,
  request,
  set,
}: Context & { jwt: any; request: any; set: any }) => {
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

    const query = await prisma.lecturer_vet.findMany({
      orderBy: [{ createAt: "asc" }, { fname: "asc" }],
    });
    console.info(`[${Title}]  Fetch Vet successfully`);
    set.status = 200;
    return {
      success: true,
      message: "Fetch Vet successfully",
      data: query,
    };
  } catch (error: any) {
    console.error(
      `[${Title}] Error in Vet: ${error.message}\nStack: ${error.stack}`,
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

export const Role_Update_Vet = async ({
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

    const edit = await prisma.lecturer_vet.update({
      where: {
        accountId: decryptedData.accountId,
      },
      data: {
        prefix: decryptedData.prefix,
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        number_ce: decryptedData.number_ce ?? null,
        updateAt: new Date(),
      },
    });

    if (edit) {
      console.info(`[${Title}]  Update Vet successfully`);
      set.status = 201;
      return {
        success: true,
        message: "Update Vet successfully",
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
    console.info(`[${Title}] [VETLIST] process completed`);
    console.info("─".repeat(20));
  }
};

export const Role_Created_Vet = async ({
  request,
  body,
  set,
  jwt,
}: Context & { request: any; body: VetCreateProps; set: any; jwt: any }) => {
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

    if (!body) {
      console.error(`[${Title}] `);
      set.status = 400;
      return {
        success: false,
        message: "Missing encrypted data",
      };
    }

    const decodedEncryptedData = decryptMiddleware(body.encryptedData);
    const decryptedData = decodedEncryptedData as VetDataInterface;

    if (!decryptedData) {
      console.error(`[${Title}] Failed to decrypt data: ${decryptedData}`);
      set.status = 400;
      return {
        success: false,
        message: "Failed to decrypt data",
      };
    }

    const search: any = await prisma.lecturer_vet.findFirst({
      where: {
        fname: decryptedData.fname,
        lname: decryptedData.lname,
      },
    });

    if (search) {
      console.error(`[${Title}] Duplicate name. Cannot add the data.`);
      set.status = 409;
      return {
        success: false,
        message:
          "This name already exists in the system. Please use a different name.",
      };
    }

    const add = await prisma.lecturer_vet.create({
      data: {
        prefix: decryptedData.prefix,
        fname: decryptedData.fname,
        lname: decryptedData.lname,
        number_ce: decryptedData.number_ce ?? null,
      },
    });

    if (add) {
      set.status = 201;
      console.info(`[${Title}] Data added successfully.`);
      return {
        success: true,
        message: "Create vet successfully",
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
    console.info(`[${Title}] [VET] process completed`);
    console.info("─".repeat(20));
  }
};

export const Role_Delete_Vet = async ({
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

    const deleteVet = await prisma.lecturer_vet.delete({
      where: {
        accountId: decryptedData,
      },
    });

    if (deleteVet) {
      console.info(`[${Title}]  Delete Vet successfully`);
      Logger.info(`Delete Vet successfully `, {
        Title: `[DELETE_VET]`,
        Admin_Name:
          authention.data.firstname_EN + " " + authention.data.lastname_EN,
        Delete_User: deleteVet.fname + " " + deleteVet.lname,
      });
      set.status = 200;
      return {
        success: true,
        message: "Delete Vet successfully",
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
    console.info(`[${Title}] [VET] process completed`);
    console.info("─".repeat(20));
  }
};
