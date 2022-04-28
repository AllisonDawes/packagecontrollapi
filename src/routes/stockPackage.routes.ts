import { Router } from "express";

import ensureAuthenticated from "../middlewares/ensureAuthenticated";
import StockPackageController from "../controllers/stock/package/StockPackageController";

const stockPackageRouter = Router();

const stockPackageController = new StockPackageController();

stockPackageRouter.use(ensureAuthenticated);

stockPackageRouter.post("/", stockPackageController.create);

export default stockPackageRouter;
