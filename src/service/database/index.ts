import mongoose from "mongoose";

let url = process.env.MONGODB_URI || "";

export const leodaSDB = mongoose.createConnection(url);
!leodaSDB
  ? console.log("Error connecting to database")
  : console.log("Connected to database");
