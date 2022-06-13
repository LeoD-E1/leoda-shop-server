import UserModel from "../../../database/models/user/user";

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
