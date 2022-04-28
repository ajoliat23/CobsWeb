import React from 'react'
//You guessed it: Coding with Basir 'inspired' this--his tutorial was extremely helpful and only 45 minutes
export default function Product(props){
    const {product, onAdd} = props;
    const sendMessage = () => {
        alert('Thank you for purchasing from Cobs Soul Music');
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
                <p>$0.99</p>
                <button onClick={() => sendMessage()}>Purchase</button>
            </div>
        </div>
    )

}
