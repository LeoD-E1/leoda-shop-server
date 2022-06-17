import { Router } from "restify-router";
import branchOfficeController from "../../controllers/branchOffice";

const branchOfficeRouter = new Router();

branchOfficeRouter.post("/create");

export default branchOfficeRouter;
