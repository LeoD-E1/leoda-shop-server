import { Router } from "restify-router";
import productRouter from "./products.router";
import userRouter from "./user/user.routes";
import authRouter from "./auth/auth.routes";

const routerInstance = new Router();
const listOfRouter = new Router();

routerInstance.add("/api/v1", listOfRouter);

listOfRouter.add("/auth", authRouter);
listOfRouter.add("/user", userRouter);
listOfRouter.add("/product", productRouter);

/* Demas rutas relacionadas con la api*/

export default routerInstance;
