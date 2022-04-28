import React, { useState } from 'react';
//Coding with Basir helped me out with this Cart

export default function Ad2(){
    const[visCont, setVisCont] = useState(false);
    return (
    
    <div className='block col-1'>
        {visCont===false ? 
         <div>  
       <button className = 'badge'  onClick={()=>setVisCont(!visCont)}>X</button>
       <h2>Get your Cereal Flakes for $1.99!</h2> 
       <p id='Fine'>Ad</p>
       <div className='row'>
            <img id = "cereal"src = "/cerealBox.png"></img>
            <img id = "flakes"src = "/cerealFlakes.png"></img>
            <img id = "cereal"src = "/cerealBox.png"></img>
       </div>
       
       <p id='Fine' className='right'>Asbestos Free</p>
       </div>
        : <></>}
    </div>
        );
}