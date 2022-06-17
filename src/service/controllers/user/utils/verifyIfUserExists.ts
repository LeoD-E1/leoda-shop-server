import UserModel from "../../../database/models/user/user";

const verifyIfUserExists = async (email: string) => {
  try {
    const user = await UserModel.findOne({
      "contact.email": email,
    });

    if (!user) return false;

    return user;
  } catch (error) {
    return error;
  }
};
export default verifyIfUserExists;
