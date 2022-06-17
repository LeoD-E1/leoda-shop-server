import { Request, Response } from "restify";
import CommerceModel from "../../database/models/commerce/commerce";

const createCommerce = async (req: Request, res: Response) => {
  const { name } = req.body;
  if (!name) {
    return res
      .json({
        message: "Name is required",
      })
      .status(400);
  }
  try {
    const comemerce = await CommerceModel.create({ name });
    if (!comemerce)
      return res.json({ message: "Commerce not created" }).status(500);
    return res.json({ message: "Commerce created successfully" }).status(200);
  } catch (error) {
    console.log(error);
  }
};

export default createCommerce;
