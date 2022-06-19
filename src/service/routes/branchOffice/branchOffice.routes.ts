import { Router } from "restify-router";
import branchOfficeController from "../../controllers/branchOffice";

const branchOfficeRouter = new Router();

branchOfficeRouter.post("/", branchOfficeController.createBranchOffice);

export default branchOfficeRouter;
