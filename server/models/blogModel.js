const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Create Schema
const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, { timestamps: true });

// Create Model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;