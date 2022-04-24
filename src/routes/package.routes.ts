import { Router } from "express";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

import PackageController from "../controllers/package/PackageController";

const packageRouter = Router();

const packageController = new PackageController();

packageRouter.use(ensureAuthenticated);

packageRouter.get("/", packageController.index);
packageRouter.post("/", packageController.create);

export default packageRouter;
