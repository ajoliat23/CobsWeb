import React, { useState } from "react";
import './index.css';
import Header from './components/Header';
import MainL from './components/MainL';
import BasketL from './components/BasketL';
import data from './data';

function LightPage() { //all this routing stuff i learned from The Net Ninja
    const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id)
    if(exist) {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty+1} : x
          )
        );
    } else {
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }
  const onRemove = (product) => {
    const exist = cartItems.find((x)=>x.id === product.id);
    if(exist.qty===1){
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else{
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
          )
        );
    }
  }
  
    return (
        <div className='light'>
        <div>
            <Header countCartItems = {cartItems.length}></Header>
            <div className='row'>
            <MainL onAdd ={onAdd} products = {products}></MainL>
            <BasketL onAdd ={onAdd} onRemove={onRemove} cartItems={cartItems}></BasketL>
            </div>
        </div>
        
        </div>
    );
}

export default LightPage;
