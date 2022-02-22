import React, { useState } from "react";
import './index.css';
import Header from './components/Header';
import Main from './components/Main';
import Basket from './components/Basket';
import data from './data';

function DarkPage() { //all this routing stuff i learned from The Net Ninja
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
   
        <div className='dark'>
        <div>
            <Header countCartItems = {cartItems.length}></Header>
            <div className='row'>
            <Main onAdd ={onAdd} products = {products}></Main>
            <Basket onAdd ={onAdd} onRemove={onRemove} cartItems={cartItems}></Basket>
            </div>
        </div>
        
        </div>
    
    );
}

export default DarkPage;
