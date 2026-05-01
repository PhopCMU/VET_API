import { Elysia } from "elysia";
import {
  AbstractFetchDataModel,
  AbstractRequestModel,
  AbstractRequstModelImage,
} from "../../model/cmuvc/AbstractModel";
import {
  AbstractsController,
  AbstractsController_AbstractType,
  AbstractsController_fetchData,
  UpdateAbstractController,
} from "../../controllers/cmuvc/AbstractsController";
// import { EmailService } from "../../services/EmailSmtp";

export const abstractsRouter = new Elysia({ prefix: "/abstract" })

  .get("/", AbstractsController_AbstractType, {
    detail: { tags: ["Abstracts"] },
  })

  .post("/submission", AbstractsController, {
    body: AbstractRequestModel,
    detail: { tags: ["Abstracts"] },
  })

  .get("/fetchOne", AbstractsController_fetchData, {
    query: AbstractFetchDataModel,
    detail: { tags: ["Abstracts"] },
  })

  .post("/update/image/payment", UpdateAbstractController, {
    body: AbstractRequstModelImage,
    detail: { tags: ["Abstracts"] },
  });

// .post("/send", async () => {
//   return EmailService.sendEmail();
// });
