import commerceController from "../../controllers/commerce";
import branchOfficeRouter from "../branchOffice/branchOffice.routes";
import { Router } from "restify-router";

const commerceRouter = new Router();

commerceRouter.post("/", commerceController.createCommerce);
// commerceRouter.get("/", commerceController.getAllCommerces);
// commerceRouter.put("/:id", commerceController.updateCommerce);
// commerceRouter.del("/:id", commerceController.deleteCommerce);
commerceRouter.add("/:id/branchs", branchOfficeRouter);

export default commerceRouter;
