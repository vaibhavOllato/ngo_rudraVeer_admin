// models/PendingVolunteer.js
import mongoose from "mongoose";

const pendingVolunteerSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  dob: String,
  address: String,
  aadhaarNumber: String,
  profilePicture: String,
});

export default mongoose.model("PendingVolunteer", pendingVolunteerSchema);
