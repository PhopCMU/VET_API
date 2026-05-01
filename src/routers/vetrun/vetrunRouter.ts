import Elysia from "elysia";
import {
  CheckTrackingController,
  SaleShirtContorller,
  ShritContorller,
} from "../../controllers/vetrun/ShritContorller";
import {
  checkFancyLimitAndRegister,
  getParticipantController,
  ParticipantController,
} from "../../controllers/vetrun/ParticipantController";
import {
  ParticipantCreateModel,
  SaleShirtsCreateModel,
} from "../../model/vetrun/vetrunModel";
import { SponsorContorller } from "../../controllers/vetrun/SponsorsController";

export const vetrunRouter = new Elysia()
  .get("/size/shirt", ShritContorller, {
    detail: { tag: ["Vetrun"] },
  })

  .get("/limit/animal", checkFancyLimitAndRegister, {
    detail: { tag: ["Vetrun"] },
  })
  .get("/participant/all", getParticipantController, {
    detail: { tag: ["Vetrun"] },
  })
  .get("/sponsors", SponsorContorller, {
    detail: { tag: ["Vetrun"] },
  })
  .get("/tracking", CheckTrackingController, {
    detail: { tag: ["Vetrun"] },
  })
  .post("/register/participant", ParticipantController, {
    body: ParticipantCreateModel,
    detail: { tag: ["Vetrun"] },
  })
  .post("/sale/shirt", SaleShirtContorller, {
    body: SaleShirtsCreateModel,
    detail: { tag: ["Vetrun"] },
  });
