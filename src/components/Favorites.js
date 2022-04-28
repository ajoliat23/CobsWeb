import React from 'react';
//Coding with Basir helped me out with this Cart

export default function Basket(props){
    const {cartItems, onAdd, onRemove} = props;
    
    return (
    
    <aside className='block col-1'>
       <h2>Favorites</h2> 
       <div>
           {cartItems.length ===0 && <div>No Favorites yet</div>}
       </div>
       {cartItems.map((item)=>(
           <div key ={item.id} className='row'>
               <div className='col-2'>{item.name}</div>
               <div className='col-2 text-right'>
                  {item.artist}
               </div>
               <div className='col-2'>
                   <button onClick={()=>onRemove(item)} className='remove'>-</button>
               </div>
               
           </div>
       ))}

    </aside>
        );
}