import { Request, Response } from "restify";
import verifyIfUserExists from "../user/utils/verifyIfUserExists";

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .json({
        message: "Email and password are required",
      })
      .status(400);
  }
  try {
    const user = await verifyIfUserExists(email);

    if (!user) {
      return res
        .json({
          message: "User not found, please register for sign in",
        })
        .status(400);
    }

    // Verificar las passwords
    if (user.password !== password) {
      return res
        .json({
          message: "Password incorrect",
        })
        .status(400);
    }

    return res.json({ message: "Welcome user " });
  } catch (error) {
    return res.json({ message: "Something went wrong", error });
  }
};

export default login;
