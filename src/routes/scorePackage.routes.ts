import { Router } from "express";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import ScorePackageController from "../controllers/score/package/ScorePackageController";

const scorePackageRouter = Router();

const scorePackageController = new ScorePackageController();

scorePackageRouter.use(ensureAuthenticated);

scorePackageRouter.post("/", scorePackageController.create);

export default scorePackageRouter;
