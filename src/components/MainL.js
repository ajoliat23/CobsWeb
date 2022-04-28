import React, { useState } from 'react';
import Product from './ProductL';
//Coding with Basir except for the VisCk thing

export default function Main(props){
    const {products, onAdd} = props;
    const[visCk, setVisCk] = useState(false);
      
    return (
    <main className='block col-2'>
        <div>
            
                <div>
                    <h2 id = 'larger'></h2>
                    <div className='row'>
                        {products.map((product) => (
                            <div>
                            <Product key={product.id} product={product} onAdd={onAdd}></Product>
                            </div>
                        ))} 
                    </div>
                    
                </div>
            

            
            
          
        </div>
    </main>
        );
}