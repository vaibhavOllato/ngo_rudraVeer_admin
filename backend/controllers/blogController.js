import { v2 as cloudinary } from "cloudinary";
import Blog from "../models/blogModel.js";
import dotenv from 'dotenv';

dotenv.config(); 
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const createBlog = async (req, res) => {
  try {
    const { title, content, donationName, author } = req.body;

    console.log("📥 Incoming blog data:", { title, content, donationName, author });
    console.log("📸 Uploaded files:", req.files);

    let imageUrls = [];

    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) =>
        cloudinary.uploader.upload(file.path, { folder: "blogs" })
      );
      const uploadResults = await Promise.all(uploadPromises);
      imageUrls = uploadResults.map((result) => result.secure_url);
    }

    const newBlog = new Blog({
      title,
      content,
      donationName,
      author: author || "Anonymous",
      images: imageUrls,
    });

    await newBlog.save();
    res.status(201).json({ success: true, blog: newBlog });
  } catch (error) {
    console.error("❌ Blog creation failed:", error);
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
};


export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const { title, content, donationName, author } = req.body;

    let imageUrls = [];

    if (req.files && req.files.length > 0) {
      const uploadPromises = req.files.map((file) =>
        cloudinary.uploader.upload(file.path, { folder: "blogs" })
      );
      const uploadResults = await Promise.all(uploadPromises);
      imageUrls = uploadResults.map((result) => result.secure_url);
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      {
        title,
        content,
        donationName,
        author,
        ...(imageUrls.length && { images: imageUrls }),
      },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, blog: updatedBlog });
  } catch (error) {
    console.error("❌ Update failed:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};


export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }

    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("❌ Delete failed:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
