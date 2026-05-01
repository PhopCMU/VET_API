import { Context } from "elysia";
import { PrismaClient } from "../../../generated/role";
import { ProjectModel } from "../../model/role/ProjectModel";
import { console } from "inspector";
import { rateLimitByIp, getClientIp } from "../../utils/rateLimiter";
import { createPartLogger } from "../../../utils/Logger";

const prisma = new PrismaClient();

const Title = "PROJECT_LIST";
const Logger = createPartLogger("/Role/Project");

export const ProjectController = async (set: any) => {
  console.info(`[${Title}]  Starting to fetch project`);
  try {
    const response = prisma.project.findMany({
      include: {
        UserPermission: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.info(`[${Title}]  Fetch project successfully`);
    set.status = 200;
    return response;
  } catch (error: any) {
    console.error(`[${Title}]  Fetch project failed: ${error.message}`);
    if (error.response) {
      console.error(
        `[${Title}]  Error details: ${JSON.stringify(error.response)}`,
      );
      set.status = 500;
      return {
        success: false,
        message: "Project fetch failed",
        error: error.message,
      };
    }
  } finally {
    await prisma.$disconnect();
    console.info(`[${Title}]  process completed`);
    console.info("─".repeat(20));
  }
};

export const OprenProjectController = async ({
  query,
  set,
  request,
}: Context & { query: ProjectModel }) => {
  const clientIp = getClientIp(request) || "unknown";

  // --- เพิ่ม Rate Limiting ที่นี่ ---
  const rateLimitResult = await rateLimitByIp(request);
  if (!rateLimitResult.success) {
    set.status = 429; // Too Many Requests
    console.debug({ rateLimitResult: rateLimitResult.message, clientIp });
    Logger.warn(`${rateLimitResult.message} | ${clientIp}`);
    return { success: false, message: rateLimitResult.message };
  }

  try {
    const oprenProject = await prisma.project.findFirst({
      where: {
        projectId: query.projectId,
      },
      select: {
        name: true,
        description: true,
        status: true,
      },
    });

    if (oprenProject) {
      set.status = 200;
      return {
        success: true,
        message: "Data found",
        data: oprenProject,
      };
    } else {
      set.status = 404;
      return {
        success: false,
        message: "Data not found",
      };
    }
  } catch (error: any) {
    console.error(` Failed to Fatch Data Open Project types: ${error.message}`);
    set.status = 500;
    return {
      success: false,
      message: "Failed to fetch Student types",
      error: error.message,
    };
  } finally {
    await prisma.$disconnect();
    console.info(`End Process`);
  }
};
