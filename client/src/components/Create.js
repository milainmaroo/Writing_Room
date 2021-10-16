import { React, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const history = useHistory();

    const [blog, setBlog] = useState({ title: '', body: '', author: 'Norine' }); // object

    const handleChange = (e) => {
        const {name, value} = e.target;
        setBlog(prevInput => {
            return(
                {
                    ...prevInput,
                    [name]: value
                }
            )
        })
    }

    const createBlog = (e) => {
        e.preventDefault();

        const newBlog = { 
            title: blog.title, 
            body: blog.body,
            author: blog.author
        };

        axios.post('https://writing-room-project.herokuapp.com/create', newBlog);
        // alert("blog added");

        // direct to home page
        history.push('/');
    }

    return ( 
        <div className="create-blog">
            <h2>Create a New Blog</h2>

            <form>
                <label>Blog title:</label>
                <input name="title" value={blog.title} onChange={handleChange} required />
                <label>Blog body:</label>
                <textarea name="body" value={blog.body} onChange={handleChange} required></textarea>
                <label>Blog author:</label>
                <select name="author" value={blog.author} onChange={handleChange}>
                    <option value="Norine">Norine</option>
                    <option value="John">John</option>
                    <option value="Penny">Penny</option>
                </select>
                <button onClick={createBlog}>Create</button>
            </form>

        </div>
     );
}
 
export default Create;