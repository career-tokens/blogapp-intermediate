import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { Blog } from "./models/Blog.js";

export const app = express();//using express app
config({
  path: "./.env",
});

console.log(process.env.MONGO_URI);

app.use(cookieParser());
app.use(
  cors({
    origin: 'https://blogapp-k5ni.vercel.app',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);// avoiding cors errors

app.use(express.json());//for dealing with json

app.get("/api/test", (req, res) => {
  res.json("test ok3");
});//this sets up a prototype such that when something makes a GET request on that url , that function is dn

app.post("/api/blogs", async (req, res) => {
  const { title, author, body ,selectedImage ,keyword ,date } = req.body;
  const blog = await Blog.create({ title, author, body ,selectedImage ,keyword ,date });
  res.json(blog);
});

app.get("/api/transactions", async (req, res) => {
  const blogs = await Blog.find();
  res.json(blogs);
});

app.get("/api/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

app.delete("/api/transactions/:id", async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndDelete(id);
  if (blog) {
    res.json(blog);
  } else {
    res.status(404).json({ error: "Blog not found" });
  }
});

// Add the following middleware to handle CORS preflight requests
app.options("/api/transactions", cors());

export default app;
