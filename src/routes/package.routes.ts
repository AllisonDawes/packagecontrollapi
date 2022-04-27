import { Router } from "express";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";

import PackageController from "../controllers/package/PackageController";

const packageRouter = Router();

const packageController = new PackageController();

packageRouter.use(ensureAuthenticated);

packageRouter.get("/", packageController.index);
packageRouter.get("/by_filter", packageController.show);
packageRouter.post("/", packageController.create);
packageRouter.put("/:package_id", packageController.update);
packageRouter.delete("/:package_id", packageController.delete);

export default packageRouter;
