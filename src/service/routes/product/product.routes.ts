import productController from "../../controllers/product";
import { Router } from "restify-router";

const productRouter = new Router();

productRouter.post("/", productController.createProduct);
productRouter.get("/", productController.getProducts);

export default productRouter;
