import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const [blogs, setBlogs] = useState([{ title: '', body: '', author: '' }]); // array

    // get all blogs
    useEffect(() => {
        // localhost:3000/blogs
        fetch('https://writing-room-project.herokuapp.com/blogs').then(res => {
            if(res.ok) {
                return res.json();
            }
        }).then(jsonRes => {
            setBlogs(jsonRes)
        })
    });


    return ( 
        <div className="all-blogs">
            <h2>All Blogs</h2>
    
            {blogs.map(blog => {
                return (
                <div className="blog" key={blog._id}>
                    <Link to={`/blogs/${blog._id}`}>
                        <h3 className="title">{blog.title}</h3>
                        <p className="author">Written by {blog.author}</p>
                    </Link>
                </div> 

                )
            })}
        </div>
     );
}
 
export default Home;