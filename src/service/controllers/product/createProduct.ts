import { Request, Response } from "restify";
import ProductModel from "../../database/models/product/product";

const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;
};

export default createProduct;
