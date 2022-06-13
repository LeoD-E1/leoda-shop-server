import { Router } from "restify-router";
import {
  getProducts,
  getProductById,
} from "../controllers/product/product.controller";

const productRoutes = new Router();

productRoutes.get("/", getProducts);
productRoutes.get("/:productId", getProductById);

export default productRoutes;
