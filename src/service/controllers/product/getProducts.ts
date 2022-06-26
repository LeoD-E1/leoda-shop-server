import { Request, Response } from "restify";
import ProductModel from "../../database/models/product/product";

const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await ProductModel.find({});
    return res.json({ products }).status(201);
  } catch (error) {
    return res.json({ error });
  }
};

export default getProducts;
