import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => { //got this navbar stuff also from The Net Ninja
    return ( 
        <nav className = "navbar"> 
            <h1>Cob's Soulo Game</h1>
            <div className="links">
                <Link to="/"></Link>
                <Link to="/template">Dark Page</Link>
                <Link to="/templateL">Light Page</Link>
                <Link to = "/terms"></Link>
                <Link to = "/thanks"></Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
