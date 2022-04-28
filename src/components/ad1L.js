import React, { useState } from 'react';

//stack overflow help cont

export default function Ad1(){
    const[visCont, setVisCont] = useState(false);
    return (
    
    <div className='block col-1'>
        {visCont===false ? 
         <div>   
            <button className = 'badge'  onClick={()=>setVisCont(!visCont)}>X</button>
            <p id='Fine'>Ad</p>
            <img id = "bobdole" width = '170px' src = "/bobdole.png"></img>
            <p><b>Support Zombie Bob Dole 2024</b></p>

            <a href='http://www.dolekemp96.org/agenda/issues/internet.htm' className='adBtn'>Visit Site</a>
        </div>
        : <></>}
    </div>
        );
}