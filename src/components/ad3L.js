import React, { useState } from 'react';

export default function Ad3(){
    const[visCont, setVisCont] = useState(false);
    return (
    
    <div className='block col-1'>
        {visCont===false ? 
         <div>  
       <button className = 'badge'  onClick={()=>setVisCont(!visCont)}>X</button>
       <h2>Jim's Brake Pads</h2> 
       <p id='Fine'>Ad</p>
       <div className='row'>
        <img id = "Brake Pads" src = "/brakePads.png" height = '100px'></img>

       </div>
      
       <h3>"Works Everytime, 50% of the time"</h3>
       
       </div>
        : <></>}

    </div>
        );
}