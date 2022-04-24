import { Router } from "express";

import usersRoutes from "./users.routes";
import sessionRouter from "./session.routes";
import adminRouter from "./admin.routes";
import packageRouter from "./package.routes";

const routes = Router();

routes.use("/users", usersRoutes);
routes.use("/sessions", sessionRouter);
routes.use("/admin", adminRouter);
routes.use("/packages", packageRouter);

export default routes;
