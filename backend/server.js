import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
// import authRoutes from './routes/authRoutes.js';
import authRoutes from "./routes/authRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); // ← IMPORTANT for req.body
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/admin", authRoutes);
app.use("/api/volunteers", volunteerRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("😊 MongoDB connected");
    app.listen(PORT, () => console.log(`🚀 Server is running on port ${PORT}`));
  })
  .catch((err) => console.error("❌ MongoDB connection error:", err));
