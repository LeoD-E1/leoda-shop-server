import { Router } from "restify-router";
import branchOfficeController from "../../controllers/branchOffice";
import productRouter from "../product/product.routes";

const branchOfficeRouter = new Router();

branchOfficeRouter.post("/", branchOfficeController.createBranchOffice);
// branchOfficeRouter.get("/", branchOfficeController.getAllBranchOffices);
// branchOfficeRouter.put("/:id", branchOfficeController.updateBranchOffice);
// branchOfficeRouter.del("/:id", branchOfficeController.deleteBranchOffice);
branchOfficeRouter.add("/:id", productRouter);

export default branchOfficeRouter;
