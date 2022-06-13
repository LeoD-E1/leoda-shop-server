import { leodaSDB } from "../../";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String },
    lastname: { type: String },
    dni: { type: Number },
    username: { type: String, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true, default: "owner" },
    contact: {
      number: { type: Number },
      type: { type: String },
      email: { type: String, required: true, unique: true },
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

const UserModel = leodaSDB.model("user", userSchema);
export default UserModel;
