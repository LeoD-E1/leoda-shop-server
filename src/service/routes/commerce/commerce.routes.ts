// import commerceController from "../../controllers/auth";
import { Router } from "restify-router";
// import { Request, Response, Next } from "restify";

const commerceRouter = new Router();

// const middFirst = (req: Request, res: Response, next: Next) => {
//   console.log("obj", req.body);
//   next();
// };

commerceRouter.post("/create");
export default commerceRouter;
