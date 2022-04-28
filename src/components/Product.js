import React from 'react'
//You guessed it: Coding with Basir 'inspired' this--his tutorial was extremely helpful and only 45 minutes
export default function Product(props){
    const {product, onAdd} = props;
    const sendMessage = () => {
        alert('Not enough Cobs Bucks to purchase');
    }
    return(
        <div>
            <img className='small' src={product.image} alt = {product.name}></img>
            <h3>{product.name}</h3>
            <div>
            
                 {product.artist}
                
            </div>

            <div>
                <button onClick={() => onAdd(product)}>Make Favorite</button>
                <div>
                    
                 <div className="old">
                    <img src='silver.png' className = 'tiny'></img>: {12 + 2}
                   </div> 
                    <strong>Only <img className = 'tiny' src='bronze.png'></img>:{20}</strong>
                
              
                </div>
                <button onClick={() => sendMessage()}>Purchase</button>
            </div>
        </div>
    )

}
