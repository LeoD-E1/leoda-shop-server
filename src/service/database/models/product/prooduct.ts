import { leodaSDB } from "service/database";
import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    name: { type: String, required: true, default: "Product" },
    href: { type: String },
    images: {
      title: { type: String },
      src: {
        type: String,
        required: true,
        default: "https://via.placeholder.com/150",
      },
      alt: { type: String, required: true, default: "Product" },
    },
    price: {
      currency: { type: String, required: true, default: "ARS" },
      value: { type: Number, required: true, default: 0 },
    },
    color: { type: Array, required: true },
    category: { type: Array },
    description: { type: String },
    size: { type: Array },
    brand: { type: String },
    clothingType: { type: String },
    quantity: { type: Number, required: true, default: 1 },
  },
  {
    timestamps: true,
  }
);

const ProductModel = leodaSDB.model("product", productSchema);
export default ProductModel;
