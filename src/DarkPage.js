import React, { useState } from "react";
import './index.css';
import Header from './components/Header';
import Timer from './components/Timer';
import Main from './components/Main';
import Favorites from './components/Favorites';
import Footer from './components/Footer';
import Ad1 from './components/ad1';
import Ad2 from './components/ad2';
import Ad3 from './components/ad3';
import data from './data';

//good luck trying to read this if you actually try
//it is a disaster of hardcoding and I am not using components correctly, but it works

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
  
  const[visCont, setVisCont] = useState(false);
  const[chkVis, goCheckout] = useState(false);

  const[visCont2, setVisCont2] = useState(false);
 
    return (
      <html>
      
   
        <div className='dark'>
            <div>
                <Header countCartItems = {cartItems.length}></Header>
                {visCont===false ?
                  <div>
                    <button className = ''  onClick={()=>setVisCont(!visCont)}>Store</button>
                  <div className="row">
                    <p className="sale"><b>FLASH SALE!!</b></p> 
                    <Timer/>
                  </div>
                  <div className='row'>
                    
                    <Main onAdd ={onAdd} products = {products}></Main>
                    <Ad1></Ad1>
                    <Favorites onAdd ={onAdd} onRemove={onRemove} cartItems={cartItems}></Favorites>

                    <aside className = 'block col-1 bucks'>
                      <h2>Your Currency</h2>
                      <img src = 'gold.png' id= 'currency'></img>
                      <p>0</p>
                      <img src = 'silver.png' id= 'currency'></img>
                      <p>2</p>
                      <img src = 'bronze.png' id= 'currency'></img>
                      <p>7</p>
                  </aside>
                  </div>
                  
                  </div>
                : 
                <div> 
                  <button className = ''  onClick={()=>setVisCont(!visCont)}>Songs</button>
                <div className="row">
                  {chkVis===false ? 
                <div className="store row col-2">
                  
                  <div>
                    <p><strong className='sale'>SALE!!</strong></p> 
                    <img className='small' src='gold.png' alt = 'Gold'></img>
                    <h3>Gold Bucks</h3>
                    <div>
                      <div className="old">
                        $4.99 
                      </div>
                  
                      <strong id="larger">Only 
                        $2.99!
                      </strong>
                    </div>

                    <button  onClick={() => goCheckout(!chkVis)}>Purchase</button>
                    
                  </div>

                  <div>
                    <p><strong className='sale'>SALE!!</strong></p> 
                    <img className='small' src='silver.png' alt = 'Gold'></img>
                    <h3>Silver Bucks</h3>
                    <div>
                      <div className="old">
                        $2.99 
                      </div>
                  
                      <strong id="larger">Only 
                        $1.99!
                      </strong>
                    </div>

                    <button  onClick={() => goCheckout(!chkVis)}>Purchase</button>
                    
                  </div>

                  <div>
                    <p><strong className='sale'>SALE!!</strong></p> 
                    <img className='small' src='bronze.png' alt = 'Gold'></img>
                    <h3>Bronze Bucks</h3>
                    <div>
                      <div className="old">
                        $1.99 
                      </div>
                  
                      <strong id="larger">Only 
                        $0.99!
                      </strong>
                    </div>

                    <button  onClick={() => goCheckout(!chkVis)}>Purchase</button>
                    
                  </div>
                  
                </div>
                  : 
                  <div>
        {visCont2===false ?      
        <div>   
           
        <div class="row">
        <div class="col-75">
        
          <div class="container">
          <button className = 'badge'  onClick={()=>goCheckout(!chkVis)}>X</button> 
            <form action="">
      
              <div class="row">
                <div class="col-50">
                  <h3>Billing Address</h3>
                  <label for="fname"><i class="fa fa-user"></i> Full Name</label>
                  <input type="text" id="fname" name="firstname" placeholder="John M. Doe"></input>
                  <label for="email"><i class="fa fa-envelope"></i> Email</label>
                  <input type="text" id="email" name="email" placeholder="john@example.com"></input>
                  <label for="adr"><i class="fa fa-address-card-o"></i> Address</label>
                  <input type="text" id="adr" name="address" placeholder="542 W. 15th Street"></input>
                  <label for="city"><i class="fa fa-institution"></i> City</label>
                  <input type="text" id="city" name="city" placeholder="New York"></input>
      
                  <div class="row">
                    <div class="col-50">
                      <label for="state">State</label>
                      <input type="text" id="state" name="state" placeholder="NY"></input>
                    </div>
                    <div class="col-50">
                      <label for="zip">Zip</label>
                      <input type="text" id="zip" name="zip" placeholder="10001"></input>
                    </div>
                  </div>
                </div>
      
                <div class="col-50">
                  <h3>Payment</h3>
                  <label for="fname">Accepted Cards</label>
                  <div class="icon-container">
                    <img id = "card" src = "/istg.png" height = "40px" alt="AMVD" ></img>
                  </div>
                  <label for="cname">Name on Card</label>
                  <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                  <label for="ccnum">Credit card number</label>
                  <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                  <label for="expmonth">Exp Month</label>
                  <input type="text" id="expmonth" name="expmonth" placeholder="September"></input>
      
                  <div class="row">
                    <div class="col-50">
                      <label for="expyear">Exp Year</label>
                      <input type="text" id="expyear" name="expyear" placeholder="2018"></input>
                    </div>
                    <div class="col-50">
                      <label for="cvv">CVV</label>
                      <input type="text" id="cvv" name="cvv" placeholder="352"></input>
                    </div>
                  </div>
                </div>
      
              </div>
              <div className='row check'>
                <input type="checkbox" id="terms" checked></input> 
                <label for="terms" checked>I agree to be billed the above amount and solemly swear to adhere to law of no backsies</label>
              </div>
              <div className='row check'>
                <input type="checkbox" id="termsL" checked required></input> 
                <label for="termsL" checked required>I accept the <a href = "/terms">terms and conditions</a></label>
              </div>
              
              <button className='chkout' type ="submit" onClick={()=>setVisCont2(!visCont2)}>Place order</button>
            </form>
          </div>
          
        </div>
      </div>
      
      </div>
               : 
               
               <div className="store">
                 <button className = 'badge'  onClick={()=>setVisCont2(!visCont2)}>X</button> 
                 <h2>Thank you for your purchase</h2>
                  <p>Enjoy your Cob Bucks</p>
               </div>
            }   
       
       </div> 
                  
                  
                  
                  
                  
                  }
                <aside className = 'block col-1 bucks'>
                      <h2>Your Currency</h2>
                      <img src = 'gold.png' id= 'currency'></img>
                      <p>0</p>
                      <img src = 'silver.png' id= 'currency'></img>
                      <p>2</p>
                      <img src = 'bronze.png' id= 'currency'></img>
                      <p>7</p>
                  </aside>
                </div>
                </div>
                }
                <div className="row">
                  <Ad3></Ad3>
                  <Ad2></Ad2>
                </div>
                
                <Footer onAdd = {onAdd} onRemove={onRemove} cartItems={cartItems}></Footer>
                
            </div>
        
        </div>
      
      </html>
    );
}

export default DarkPage;