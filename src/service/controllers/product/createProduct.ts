import { Request, Response } from "restify";
import ProductModel from "../../database/models/product/product";

const createProduct = async (req: Request, res: Response) => {
  const { name, price } = req.body;

  if (!name || !price) {
    return res.json({ error: "Params are required" });
  }

  try {
    const product = await ProductModel.create({
      name,
      price: {
        value: price,
      },
    });

    if (!product) {
      return res.json({
        message: " Error creating product",
      });
    }

    return res.json({ message: "Product created successfully" });
  } catch (error) {
    return res.json({ error });
  }
};

export default createProduct;
