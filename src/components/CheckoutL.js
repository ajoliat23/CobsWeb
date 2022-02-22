import React, { useState } from 'react';
import Thanks from './Thanks';
//import "./checkout.css";

function CheckoutL() { 
  const[visCont, setVisCont] = useState(0);
    return (
       <div>
        {visCont !== 5 ?      
        <div>     
        <div class="row">
        <div class="col-75">
          <div class="container">
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
                <input type="checkbox" id="terms" name="terms" value="terms" required onClick={()=>setVisCont(visCont+1)}></input> 
                <label for="terms">I agree to be billed the above amount and solemly swear to adhere to law of no backsies</label>
              </div>
              <div className='row check'>
                <input type="checkbox" id="termsL" name="termsL" value="termsL" required onClick={()=>setVisCont(visCont+1)}></input> 
                <label for="termsL">I accept the <a href = "/terms">terms and conditions</a></label>
              </div>
              <div className='row check'>
                <input type="checkbox" id="terms" name="terms" value="terms" required onClick={()=>setVisCont(visCont+1)}></input> 
                <label for="terms">I acknowledge that I am forfeiting my soul by eating the fish</label>
              </div>
              
              <button type = "submit" className='chkout' onClick={()=>setVisCont(visCont+2)}>Place order</button>
            </form>
          </div>
          
        </div>
      </div>
      
      </div>
               : <Thanks/>
            }   
       
       </div>           
                 
                
     
      
    );
}

export default CheckoutL;