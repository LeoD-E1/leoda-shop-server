import { Request, Response } from "restify";
import UserModel from "../../database/models/user/user";

const getUsers = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.find({});
    if (!user) return res.json({ message: "User not found" }).status(400);
    return res.json(user).status(200);
  } catch (error) {
    return res.json({
      message: "Something went wrong",
      error,
    });
  }
};

export default getUsers;
