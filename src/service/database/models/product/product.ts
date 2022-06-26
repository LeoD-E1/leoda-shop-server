import { leodaSDB } from "../../";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, default: "Product" },
    href: { type: String },
    images: [
      {
        title: { type: String },
        src: {
          type: String,
          default: "https://via.placeholder.com/150",
        },
        alt: { type: String, default: "Product" },
      },
    ],
    price: {
      currency: { type: String, default: "ARS" },
      value: { type: Number, required: true, default: 0 },
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
