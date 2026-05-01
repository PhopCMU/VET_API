import { Elysia, t } from "elysia";
import { ParticipantRequestModel } from "../../model/cmuvc/ParticipantModel";
import {
  ParticipantController,
  ParticipantList_All,
} from "../../controllers/cmuvc/ParticipantController";
import { SelectDayController } from "../../controllers/cmuvc/SelectDayController";
import {
  CheckPointController,
  CheckPointList,
  cmuvcWebSocketCheckPoint,
  ListNameAllMain,
  ListNameAllPre,
} from "../../controllers/cmuvc/CheckPointController";

export const participantRouter = new Elysia({ prefix: "/participant" })
  .post(
    "/register",
    ParticipantController, // ส่ง set เข้าไปด้วย
    {
      body: ParticipantRequestModel,
      detail: { tags: ["Participant"] },
    },
  )

  .get("/day", SelectDayController, { detail: { tags: ["Participant"] } })

  .get("/data/approved", ParticipantList_All, {
    detail: { tags: ["Participant"] },
  })

  .ws("/ws", cmuvcWebSocketCheckPoint)

  // .get("/test", exampleCheckPointUpdate, { detail: { tags: ["Participant"] } })

  .get("/list/ps", ListNameAllPre, {
    detail: { tags: ["Participant"] },
  })

  .get("/list/m", ListNameAllMain, {
    detail: { tags: ["Participant"] },
  })

  .get("/pre/checkin/data", CheckPointList)

  .post("/check-in", CheckPointController, {
    body: t.Object({
      id: t.String(),
      type: t.String(),
      title: t.String(),
    }),
    detail: { tags: ["Participant"] },
  });
