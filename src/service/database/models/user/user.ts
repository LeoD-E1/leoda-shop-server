import { leodaSDB } from "service/database";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    lastname: { type: String },
    dni: { type: Number },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: "owner" },
    contact: {
      number: { type: Number, required: true },
      type: { type: String },
      email: { type: String, required: true },
      address: {
        street: { type: String },
        city: { type: String },
        state: { type: String },
        country: { type: String },
        zipCode: { type: Number },
      },
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = leodaSDB.model("product", userSchema);
export default UserModel;