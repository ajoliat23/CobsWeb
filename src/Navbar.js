import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className = "navbar"> 
            <h1>Cob's Shoes</h1>
            <div className="links">

                <Link to="/">Home</Link>
                <Link to="/DarkPage">Dark Page</Link>
                <Link to="/LightPage">Light Page</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;