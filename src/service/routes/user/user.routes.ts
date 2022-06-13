import userController from "../../controllers/user";
import { Router } from "restify-router";

const userRouter = new Router();

userRouter.post("/", userController.createUser);

export default userRouter;
