const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const BlogSchema = new Schema({
    title: { type: String, required: true },
    author: { type: String, required: true },
    body: { type: String, required: true },
    /**tags: { type: [String] },
    createdAt: { type: Date, default: Date.now },*/
});

const BlogModel = model('Blog', BlogSchema)

module.exports = BlogModel;