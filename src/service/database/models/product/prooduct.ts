import { leodaSDB } from "service/database";
import mongoose, { Schema } from "mongoose";

const productSchecma = new Schema(
  {
    name: { type: String, required: true, default: "Product" },
    href: { type: String },
    images: { type: Array },
    price: { type: Number, required: true, default: 0 },
    color: { type: Array },
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

const ProductModel = leodaSDB.model("product", productSchecma);
