import React, { useState } from "react";
import './index.css';
import Header from './components/Header';
import Main from './components/MainL';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Ad1 from './components/ad1L';
import Ad2 from './components/ad2L';
import Ad3 from './components/ad3L';
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
            <Main onAdd ={onAdd} products = {products}></Main>
            <Favorites onAdd ={onAdd} onRemove={onRemove} cartItems={cartItems}></Favorites>
            </div>
            <Footer onAdd = {onAdd} onRemove={onRemove} cartItems={cartItems}></Footer>
            <div className="row">
            <Ad1></Ad1>
            <Ad2></Ad2>
            <Ad3></Ad3>
            </div>
        </div>
        
        </div>
    
    );
}

export default LightPage;