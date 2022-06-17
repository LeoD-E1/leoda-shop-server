import { leodaSDB } from "../../";
import mongoose, { Schema } from "mongoose";

const commerceSchema = new Schema({
  name: { type: String, required: true, default: "Commerce" },
  branchOffices: [
    { type: mongoose.Schema.Types.ObjectId, ref: "BranchOffice" },
  ],
});

const CommerceModel = leodaSDB.model("Commerce", commerceSchema);
export default CommerceModel;
