import authController from "../../controllers/auth";
import { Router } from "restify-router";
// import { Request, Response, Next } from "restify";

const authRouter = new Router();

// const middFirst = (req: Request, res: Response, next: Next) => {
//   console.log("obj", req.body);
//   next();
// };

authRouter.post("/register", /* middFirst, */ authController.register);
authRouter.post("/login", authController.login);
export default authRouter;
