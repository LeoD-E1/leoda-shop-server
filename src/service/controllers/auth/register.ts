import { Request, Response } from "restify";
import UserModel from "../../database/models/user/user";
import verifyIfUserExists from "../user/utils/verifyIfUserExists";

const register = async (req: Request, res: Response) => {
  const { email, password, role } = req.body;

  if (!email || !password) {
    return res
      .json({
        message: "Email and password are required",
      })
      .status(400);
  }

  try {
    const verification = await verifyIfUserExists(email);

    if (verification) {
      return res
        .json({
          message: "User already exists",
        })
        .status(400);
    }

    const newUser = await UserModel.create({
      contact: {
        email,
      },
      password,
      role,
    });
    console.log(
      "🚀 ~ file: register.ts ~ line 34 ~ register ~ newUser",
      newUser
    );

    if (!newUser)
      return res
        .json({ message: "User not created, error in server" })
        .status(400);

    return res
      .json({
        message: "User created successfully",
      })
      .status(201);
  } catch (error) {
    console.log(error);
  }
};

export default register;
