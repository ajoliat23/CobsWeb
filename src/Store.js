import React, { useState } from "react";
import './index.css';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data2';

function Store() { //all this routing stuff i learned from The Net Ninja
  const[gold, setGold] = useState(0);
  const[silver, setSilver] = useState(0);
  const[bronze, setBronze] = useState(7);
  const[item, setItem] = useState(0);
  const[badge, setBadge] = useState(true);

    return (
        <div >
        <div className="row">
            <div className='row block col-2'>
              <div>
                <p><strong className='sale'>SALE!!</strong></p> 
                <img className='small' src='pink.png' alt = 'Pink Skin'></img>
                <h3>Pink Skin</h3>
                <div>
                  <div className="old">
                    <img className = 'tiny' src='bronze.png'></img>: {5 + 2} 
                    <img src='silver.png' className = 'tiny'></img>: {2 + 2}
                  </div>
              
                  <strong id="larger">Only 
                    <img className = 'tiny' src='bronze.png'></img>:{5} 
                    <img className = 'tiny' src='silver.png'></img>: {2}!
                  </strong>
                </div>

                {bronze >= 5 ? <div>
                    <button setItem={1} onClick={() => setBronze(2)}>Purchase</button>
                </div> : <p>Not enough CobBucks to purchase</p>}
                

              </div>

              <div>
                <p><strong className='sale'>SALE!!</strong></p> 
                <img className='small' src='shield.png' alt = 'Shield'></img>
                <h3>Shield</h3>
                <div>
                  <div className="old">
                    <img className = 'tiny' src='bronze.png'></img>: {20 + 2} 
                    <img src='silver.png' className = 'tiny'></img>: {12 + 2}
                  </div>
              
                  <strong id="larger">Only 
                    <img className = 'tiny' src='bronze.png'></img>:{20} 
                    <img className = 'tiny' src='silver.png'></img>: {12}!
                  </strong>
                </div>

                {bronze >= 20 ? 
                
                <div>
                    <button setItem={2}  onClick={() => setBronze(2)}>Purchase</button>
                </div> : <p> Not enough CobBucks to purchase</p>
                
                }
                
                
              </div>

              <div>
                <p><strong className='sale'>SALE!!</strong></p> 
                <img className='small' src='mystery.png' alt = 'Locked'></img>
                <h3>Locked</h3>
                <div>
                  <div className="old">
                    <img className = 'tiny' src='bronze.png'></img>: {500 + 2} 
                    <img src='silver.png' className = 'tiny'></img>: {270 + 2}
                  </div>
              
                  <strong id="larger">Only 
                    <img className = 'tiny' src='bronze.png'></img>:{500} 
                    <img className = 'tiny' src='silver.png'></img>: {270}!
                  </strong>
                </div>

                {bronze >= 20 ? 
                
                <div>
                    <button setItem={3}  onClick={() => setBronze(2)}>Purchase</button>
                </div> : <p> Not enough CobBucks to purchase</p>
                
                }
                
                
              </div>
            </div>

            <aside className = 'block col-1 bucks'>
              <h2>Your Currency</h2>
              <img src = 'gold.png' id= 'currency'></img>
              <p>{gold}</p>
              <img src = 'silver.png' id= 'currency'></img>
              <p>{silver}</p>
              <img src = 'bronze.png' id= 'currency'></img>
              <p>{bronze}</p>
            </aside>
        </div>
        
        </div>
    );
}

export default Store;
