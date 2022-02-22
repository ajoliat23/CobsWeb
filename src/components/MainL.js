import React, { useState } from 'react';
import ProductL from './ProductL';
import CheckoutL from './CheckoutL';


export default function MainL(props){
    const {products, onAdd} = props;
    const[visCk, setVisCk] = useState(false);
    
    return (
    <main className='block col-2'>
        <div>
            {visCk===true ? 
            <div>
                <button className='badge' onClick={()=>setVisCk(!visCk)}>X</button>
                <CheckoutL/> 
            </div>
            
            : 
                <div>
                    <h2 id ='larger'>High Quality Sole</h2>
                    
                    <div className='row'>
                        {products.map((product) => (
                            <ProductL key={product.id} product={product} onAdd={onAdd}></ProductL>
                        ))} 
                    </div>
                    <p id = "fineprint">*Does not include the one time flat rate shipping fee of $25 to account for keeping the Sole frozen + tax</p>
                    <button className='chkout' onClick={()=>setVisCk(!visCk)}>Checkout</button>
                </div>
            }
          
        </div>
    </main>
        );
}