import express from "express";
import upload from "../middlewares/multer.js";

import {
  createVolunteer,
  getAllVolunteers,
  getAllPendingApplications,
  approveVolunteer,
} from "../controllers/volunteerController.js";

const router = express.Router();

router.post("/", upload.single("profilePicture"), createVolunteer);
router.get("/", getAllVolunteers);
router.get("/pending", getAllPendingApplications); // ✅ Add this line
router.post("/:id/approve", approveVolunteer); // Use POST for approval action

export default router;
