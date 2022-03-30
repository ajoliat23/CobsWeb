import React, { useState } from 'react';
import TicTacToe from './TicTacToe/TicTacToe.js'
import {Link} from 'react-router-dom';

import StatusBar from './StatusBarGuest.js';
//Coding with Basir except for the VisCk thing

export default function Game(){
    const[gold, setGold] = useState(0);
    const[silver, setSilver] = useState(0);
    const[bronze, setBronze] = useState(0);

    const guestAlert = () => {
        alert('Must have an account to access these functions.')
    }
    

    return (
        
    <html >
        
        <div className='row'>
        
        <aside className = 'block col-1 bucks'>
            <h2>Your Currency</h2>
            <img src = 'gold.png' id= 'currency'></img>
            <p>{gold}</p>
            <img src = 'silver.png' id= 'currency'></img>
            <p>{silver}</p>
            <img src = 'bronze.png' id= 'currency'></img>
            <p>{bronze}</p>
        </aside>

        <main className='block col-2 disp2col'>
            <TicTacToe/>
            
        </main>

        </div>
        <StatusBar/>
    </html>
        );
}
