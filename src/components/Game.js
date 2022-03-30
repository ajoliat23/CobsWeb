import React, { useState } from 'react';
import TicTacToe from './TicTacToe/TicTacToe.js'
import Nav2 from './Nav2';
import Checkout from './Checkout';
import StatusBar from './StatusBar';
//Coding with Basir except for the VisCk thing

export default function Game(){
    const[gold, setGold] = useState(0);
    const[silver, setSilver] = useState(0);
    const[bronze, setBronze] = useState(7);
    const[badge, setBadge] = useState(true);

    const viewBadge = () => {
        alert('This badge has not been earned yet.');
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

        <aside className = 'block col-1 bucks'>
            <h2>Leader Board</h2>
            <h3>Your rank: 14203</h3>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>User</th>
                    <th>Score</th>
                </tr>
                <tr>
                    <td>1</td>
                    <td>greenfox23</td>
                    <td>78832</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>__madhalo__</td>
                    <td>78561</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>noodlesss</td>
                    <td>69342</td>
                </tr>

            </table>
            
        </aside>

        {badge===true ? 

        <aside className = 'block col-1 bucks'>
            
            <h2>Your Badges</h2>
            <div className='row'>
                <img src = 'black.png' width ='35px'></img>
                <img src = 'bronze.png' width ='35px'></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
            </div>
            <div className='row'>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
            </div>
            <div className='row'>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
            </div>
            <div className='row'>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
            </div>
            <div className='row'>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
                <img src = 'locked.png' width ='35px' onClick={() => viewBadge()}></img>
            </div>
            
            
            
            <button className= 'smlBtn' onClick={()=>setBadge(!badge)}>Show Achievements</button>
        </aside>
         :
        <aside className = 'block col-1 bucks'>
            
            <h2>Your Achievements</h2>
            <div className='row'>
                <img src = 'black.png' width ='35px'></img>
                <p>Dark mode unlocked</p>
            </div>
            
            <div className='row'>
                <img src = 'bronze.png' width ='35px'></img>
                <p>Obtain Bronze Cobs Bucks</p>
            </div>
            <button className= 'smlBtn' onClick={()=>setBadge(!badge)}>Show Badges</button>
        </aside>
    }
        </div>
        <StatusBar/>
    </html>
        );
}
