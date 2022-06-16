import userController from "../../controllers/user";
import { Router } from "restify-router";

const userRouter = new Router();

userRouter.post("/", userController.createUser);
userRouter.get("/", userController.getUsers);

export default userRouter;
