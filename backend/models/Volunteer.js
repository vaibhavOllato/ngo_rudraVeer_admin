// models/Volunteer.js
import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    dob: { type: Date, required: true },
    address: { type: String, required: true },
    aadhaarNumber: { type: String, required: true, unique: true },
    profilePicture: { type: String },
    status: {
      type: String,
      enum: ["volunteer", "member", "pending"],
      default: "pending",
    },
  },
  { timestamps: true }
);

const Volunteer = mongoose.model("Volunteer", volunteerSchema);
export default Volunteer;
