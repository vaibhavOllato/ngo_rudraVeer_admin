// routes/donationRoutes.js
import express from "express";
import {
  createDonation,
  getAllDonations,
  getMonthlySummary,
} from "../controllers/donationController.js";

const router = express.Router();

router.post("/", createDonation);
router.get("/", getAllDonations);
router.get("/summary/monthly", getMonthlySummary);

export default router;