import UserModel from "../../database/models/user/user";
import { Request, Response } from "restify";
import verifyIfUserExists from "./utils/verifyIfUserExists";

const createUser = async (req: Request, res: Response) => {
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

    if (!verification) {
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

    if (!newUser) return res.json({ message: "User not created" }).status(400);

    return res
      .json({
        message: "User created successfully",
      })
      .status(201);
  } catch (error) {
    return res.json({
      message: "Something went wrong",
      error,
    });
  }
};

export default createUser;
