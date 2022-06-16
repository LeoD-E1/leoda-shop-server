import authController from "../../controllers/auth";
import { Router } from "restify-router";

const authRouter = new Router();

authRouter.post("/register", authController.register);
authRouter.post("/login", authController.login);

export default authRouter;
