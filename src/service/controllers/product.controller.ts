import { Response, Request } from "restify";

const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-03-related-product-03.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];

export const getProducts = (req: Request, res: Response) => {
  try {
    return res
      .json({
        products,
      })
      .status(200);
  } catch (error) {
    res
      .json({
        message: "Something went wrong",
        error,
      })
      .status(500);
  }
};

export const getProductById = (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const product = products.find(
      (element) => element.id === parseInt(productId)
    );

    if (!product) {
      return res
        .json({
          message: "Product not found",
        })
        .status(404);
    }

    return res
      .json({
        message: `product ${product.id} has been found`,
        product,
      })
      .status(200);
  } catch (error) {
    console.log(error);
  }
};
