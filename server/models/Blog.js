import mongoose from "mongoose";
const { Schema, model } = mongoose;
const BlogSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    selectedImage:{type:String,required:true},
    keyword: { type: [String],required:true },
    date: { type: Date, default: Date.now },
});

export const Blog = model('Blog', BlogSchema);//model connected to mongoose and mongoose connected to database

