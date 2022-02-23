import React from 'react';
//This is coding with basir again 

export default function Header(props){
    const {countCartItems} = props;
    return (
    <header className='row block center'>
        <div>
            <a href = "#/">
                <h1 className='h1'>Cob's Seafood Emporium</h1>
            </a>
        </div>
        <div>
            <a href = "#/cart">
                
                Cart {' '}
                {countCartItems ? (
                    <button className='badge'>{countCartItems}</button>
                ):(' ')
                }

                </a>
        </div>
        
    </header>
        );
}
