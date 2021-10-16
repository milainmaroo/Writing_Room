import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

const Details = () => {
    const { id } = useParams(); 
    const history = useHistory();

    const [blog, setBlog] = useState([{ title: '', body: '', author: '' }]);

    useEffect(() => {
        // localhost:3000/blogs/id
        fetch('https://writing-room-project.herokuapp.com/blogs/' + id)
        .then(res => {
            if(res.ok) {
                return res.json();
            }
        })
        .then(jsonRes => {
            setBlog(jsonRes);
            //console.log(jsonRes)
        })
    }, [id]);


    function deleteBlog(id) {
        axios.delete('https://writing-room-project.herokuapp.com/blogs/' + id);
        // alert('movie deleted!');

        history.push('/');
    }

    return ( 
        // <div>
        //     <h2>Showing: {JSON.stringify(id)}</h2>
        //     <h2>Showing: {id}</h2>
        // </div>

        <div className="blog-details"> 
            <h2 className="title">{blog.title}</h2>
            <h4 className="author">Written by {blog.author}</h4>
            <p className="body">{blog.body}</p>
            <button onClick={() => deleteBlog(blog._id)}>Delete</button>
        </div>
     );
}
 
export default Details;