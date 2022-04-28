import React from 'react';
//Coding with Basir helped me out with this Cart

export default function ad2(){
    
    return (
    
    <div className='block col-1'>
       <h2>Get your Cereal Flakes Now!</h2> 
       <h3><b className='sale'>SALE!!</b> While Supplies Last</h3>
       <p id='xtFine'>Ad</p>
       <div className='row'>
            <img id = "cereal"src = "/cerealBox.png"></img>
            <img id = "flakes"src = "/cerealFlakes.png"></img>
            <img id = "cereal"src = "/cerealBox.png"></img>
       </div>
       
      
       <h3>Only <b className="old">$3.99</b> $1.99</h3>
       <p id='xtFine' className='right'>Asbestos Free</p>
    </div>
        );
}