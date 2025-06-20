// models/problemModel.js

import mongoose from "mongoose";

const problemSchema = new mongoose.Schema(
  {
    fullname: { type: String, required: true },
    email: { type: String, required: true },
    contactNo: { type: String },
    message: { type: String, required: true },
    reply: { type: String, default: "" }, // admin reply
  },
  { timestamps: true }
);

const Problem = mongoose.model("Problem", problemSchema);
export default Problem;
