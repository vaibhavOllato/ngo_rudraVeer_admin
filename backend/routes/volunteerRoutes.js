import express from "express";
// import upload from "../middlewares/multer.js";
import upload from "../middlewares/multer.js";

import {
  createVolunteer,
  getAllVolunteers,
  updateVolunteerStatus
} from "../controllers/volunteerController.js";

const router = express.Router();

router.post("/", upload.single("profilePicture"), createVolunteer);
router.get("/", getAllVolunteers);
router.patch("/:id/status", updateVolunteerStatus);

export default router;
