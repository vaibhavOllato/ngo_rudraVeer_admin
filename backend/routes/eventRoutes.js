import express from "express";
import { createEvent, updateEvent, getAllEvents, assignVolunteers, handleRSVP } from "../controllers/eventController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/", upload.single("banner"), createEvent);
router.put("/:id", updateEvent);
router.get("/", getAllEvents);
router.patch("/:id/assign-volunteers", assignVolunteers);
router.post("/:id/rsvp", handleRSVP);

export default router;
