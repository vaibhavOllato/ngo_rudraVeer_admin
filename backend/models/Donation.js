// models/Donation.js
import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donorName: {
      type: String,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    donationType: {
      type: String,
      enum: ["money", "goods"],
      required: true,
    },
    amount: Number, // Only for money
    item: String,   // Only for goods
    notes: String,
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
