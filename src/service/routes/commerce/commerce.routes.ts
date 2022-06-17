import commerceController from "../../controllers/commerce";
import { Router } from "restify-router";

const commerceRouter = new Router();

commerceRouter.post("/create", commerceController.createCommerce);
export default commerceRouter;
