const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const port = process.env.PORT || 3005;
const Blog = require('./models/blogModel');


app.use(cors());
app.use(express.json()); // to parse the request coming from front-end
app.use(express.urlencoded({extended: true}));

// connect to database/mongoose
dbURL = "mongodb+srv://netninja:test4321@nodetuts.tm0wj.mongodb.net/writing-room?retryWrites=true&w=majority";

mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true});

// API routes
// localhost:3005
app.get('/', function(req, res) {
    res.send('This is Writing Room API');
})

// get all blogs
// localhost:3005/blogs
app.get('/blogs', function(req, res) {
    Blog.find().then(blogs => res.json(blogs));
})

// add blog
app.post('/create', function(req, res) {
    const title = req.body.title;
    const body = req.body.body;
    const author = req.body.author;

    const newBlog = new Blog({ title, body, author })
    newBlog.save();
})

// get a single blog
app.get('/blogs/:id', function(req, res) {
    let id = req.params.id;
    Blog.findById({ _id: id})
        .then(blog => {
            res.json(blog);
        })
})

// delete blog
app.delete('/blogs/:id', function(req, res) {
    const id = req.params.id;
    Blog.findByIdAndDelete({ _id: id }, function(err) {
        if (!err) {
            console.log('blog deleted');
        } else {
            console.log(err);
        }
    })
})

app.listen(port, function() {
    console.log(`express server is running on port ${port}`);
});