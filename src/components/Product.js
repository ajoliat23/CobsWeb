import React from 'react'

export default function Product(props){
    const {product, onAdd} = props;
    return(
        <div>
            <p><strong className='sale'>SALE!!</strong></p> 
            <img className='small' src={product.image} alt = {product.name}></img>
            <h3>{product.name}</h3>
            <div><div className="old">${product.price + 25}</div><strong id="larger">Only ${product.price}!</strong></div>
            <div>
                <button onClick={() => onAdd(product)}>Add To Cart</button>
            </div>
        </div>
    )

}