import React from 'react';
import {Link} from 'react-router-dom';

const Nav2 = () => { //got this navbar stuff also from The Net Ninja
    
    return ( 
        <nav > 
            <div className="nav2">
                <Link to="/login" ></Link>
                <Link to="/game" className='space'>Game</Link>
                <Link to="/store" className='space'>Store</Link>
                <Link to="/recharge" className='space' >Recharge</Link>
            </div>
        </nav>
    );
}
 
export default Nav2;
