import { Router } from "restify-router";
import profileRoutes from "./profile.router";
import productRoutes from "./products.router";

const routerInstance = new Router();
const listOfRouter = new Router();

routerInstance.add("/api/v1", listOfRouter);

listOfRouter.add("/profile", profileRoutes);
listOfRouter.add("/products", productRoutes);

/* Demas rutas relacionadas con la api*/

export default routerInstance;
