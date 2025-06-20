import express from "express";
import { createBlog, getBlogs, deleteBlog, updateBlog } from "../controllers/blogController.js";
import upload from "../middlewares/multer.js";

const router = express.Router();

router.post("/", upload.array("images", 3), createBlog);
router.get("/", getBlogs);
router.delete("/:id", deleteBlog);
router.put("/:id", upload.array("images", 3), updateBlog);

export default router;
