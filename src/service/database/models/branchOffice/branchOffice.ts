import { leodaSDB } from "../../";
import { Schema } from "mongoose";

const branchOfficeSchema = new Schema(
  {
    name: { type: String, required: true, default: "Branch Office" },
    commerceId: { type: Schema.Types.ObjectId, ref: "Commerce" },
    address: {
      street: { type: String, required: true, default: "Street" },
      city: { type: String },
      state: { type: String },
      country: { type: String },
      zipCode: { type: Number },
    },
    contact: {
      number: { type: Number },
      email: { type: String },
      instagram: { type: String },
    },
    employees: [{ type: Array, ref: "User" }],
    products: [{ type: Array, ref: "Product" }],
  },
  {
    timestamps: true,
  }
);

const branchOfficeModel = leodaSDB.model("BranchOffice", branchOfficeSchema);

export default branchOfficeModel;
