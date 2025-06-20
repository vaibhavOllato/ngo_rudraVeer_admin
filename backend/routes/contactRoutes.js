import express from "express";
import {
  submitProblem,
  getAllProblems,
  replyToProblem,
} from "../controllers/problemController.js";

const router = express.Router();

router.post("/contact", submitProblem); // User submits a problem
router.get("/all", getAllProblems); // Admin fetches all problems
router.put("/contact/:id/reply", replyToProblem); // Admin replies to a problem

export default router;
