import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => { //got this navbar stuff also from The Net Ninja
    return ( 
        <nav className = "navbar"> 
            <h1>Cob's Seafood Emporium</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/DarkPage">Dark Page</Link>
                <Link to="/LightPage">Light Page</Link>
                <Link to = "/terms"></Link>
                <Link to = "/thanks"></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
