import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav>
            <div className="nav-bar">
               <h1>Writing Room</h1> 
               <p>Share Your Stories</p>
            </div>
            <div className="nav-links">
                <Link to="/">Blogs</Link>
                <Link to="/create">New Blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;