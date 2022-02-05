import React from 'react';
import {Link} from 'react-router-dom';
//Also got this Navbar stuff from The Net Ninja
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
