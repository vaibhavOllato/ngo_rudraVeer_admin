import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import mongoose from "mongoose";
// import authRoutes from './routes/authRoutes.js';
import authRoutes from "./routes/authRoutes.js";
import volunteerRoutes from "./routes/volunteerRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from './routes/contactRoutes.js';
import donationRoutes from './routes/donationRoutes.js';
import eventRoutes from './routes/eventRoutes.js';


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
app.use("/api/blogs", blogRoutes);
app.use('/api/problem', contactRoutes);
app.use('/api/donations', donationRoutes);
app.use('/api/events', eventRoutes);


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
