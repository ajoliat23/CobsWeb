import React from 'react';
//This is coding with basir again 

export default function Footer(props){
    
    const {cartItems, onAdd, onRemove} = props;
    return (
    <header className='row block center'>
        <audio controls>
            <source src="whatFoxSays.mp3" type="audio/mpeg"></source>
        </audio>
        <div>
           {cartItems.length ===0 && <div>No Song Selected</div>}
       </div>
       {
            cartItems.map((item)=>(
           
           <div key ={item.id} >
               
               Now Playing: {item.name} by {item.artist}
           </div>
       ))} 
       
        
    </header>
        );
}