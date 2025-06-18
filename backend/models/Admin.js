import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  fullName: String,
  email: { type: String, required: true, unique: true },
  password: String,
  role: {
    type: String,
    enum: ["admin", "sub-admin"],
    default: "sub-admin",
  },
});

export default mongoose.model("Admin", adminSchema);
