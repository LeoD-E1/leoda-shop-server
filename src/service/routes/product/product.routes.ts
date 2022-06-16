import productController from "../../controllers/product";
import { Router } from "restify-router";

const userRouter = new Router();

userRouter.post("/", productController.createProduct);
userRouter.get("/", productController.getProducts);

export default userRouter;
