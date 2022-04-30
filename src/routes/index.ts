import { Router } from "express";

import usersRoutes from "./users.routes";
import sessionRouter from "./session.routes";
import adminRouter from "./admin.routes";
import packageRouter from "./package.routes";
import scorePackageRouter from "./scorePackage.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionRouter);
routes.use("/admin", adminRouter);
routes.use("/packages", packageRouter);
routes.use("/score_packages", scorePackageRouter);

export default routes;
