import UserModel from "service/database/models/user/user";
import { Request, Response } from "restify";

const verifyIfUserExists = async (email: string) => {
  try {
    let user = await UserModel.findOne({ email });
    if (user) return false;
    return true;
  } catch (error) {
    return error;
  }
};
export default verifyIfUserExists;
