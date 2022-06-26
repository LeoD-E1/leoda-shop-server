import { leodaSDB } from "../../";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, default: "Product" },
    href: { type: String },
    portrait: {
      src: {
        type: String,
        default: "https://via.placeholder.com/150",
      },
      alt: { type: String, default: "Product" },
    },
    images: [
      {
        src: { type: String },
        alt: { type: String, default: "Product" },
      },
    ],
    price: {
      currency: { type: String, default: "ARS" },
      value: { type: Number, required: true },
    },
    color: [{ type: String }],
    category: [{ type: String }],
    description: { type: String },
    sizes: [{ type: String }],
    brand: { type: String },
    clothingType: { type: String },
    quantity: { type: Number, default: 1 },
  },
  {
    timestamps: true,
  }
);

const ProductModel = leodaSDB.model("Product", productSchema);
export default ProductModel;
