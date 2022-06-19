import { Router } from "restify-router";
// import productRouter from "./products.router";
import userRouter from "./user/user.routes";
import authRouter from "./auth/auth.routes";
import commerceRouter from "./commerce/commerce.routes";

const routerInstance = new Router();
const listOfRouter = new Router();

routerInstance.add("/api/v1", listOfRouter);

listOfRouter.add("/auth", authRouter);
listOfRouter.add("/user", userRouter);
// listOfRouter.add("/product",);
listOfRouter.add("/commerce", commerceRouter);

export default routerInstance;
