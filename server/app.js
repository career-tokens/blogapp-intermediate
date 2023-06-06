import express from "express";
import mongoose from "mongoose";
//import userRouter from "./routes/user.js";
//import taskRouter from "./routes/task.js";
import { config } from "dotenv";
import cookieParser from "cookie-parser";
//import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import { Blog } from "./models/Blog.js";

export const app = express()
config({
  path: "./.env",
});


console.log(process.env.MONGO_URI)

app.use(cookieParser());
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.get('/api/test', (req, res) => {
    res.json('test ok3');
})

app.post('/api/blogs', async (req, res) => {
    const { title,author,body} = req.body;
    const blog = await Blog.create(
        { title,body,author} 
    );
    res.json(blog);
});
// when using thunder client to send POST request make sure to send POST and not GET request or something like that
app.get('/api/transactions', async (req, res) => {
    const blogs= await Blog.find();
    res.json(blogs); 
})
app.get('/api/transactions/:id', async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findById(id);
  if (blog) {
      res.json(blog);
  } else {
      res.status(404).json({ error: 'Blog not found' });
  }
});
app.delete('/api/transactions/:id', async (req, res) => {
  const { id } = req.params;
  const blog = await Blog.findByIdAndDelete(id);
  if (blog) {
      res.json(blog);
  } else {
      res.status(404).json({ error: 'Blog not found' });
  }
});


