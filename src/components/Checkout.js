import React, { useState } from 'react';
import Thanks from './Thanks';
//W3Schools helped me with this form, not taking credit for that, however all that const stuff was me


function Checkout() { 
  const[visCont, setVisCont] = useState(false);
    return (
       <div>
        {visCont===false ?      
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
                <input type="checkbox" id="terms" checked></input> 
                <label for="terms" checked>I agree to be billed the above amount and solemly swear to adhere to law of no backsies</label>
              </div>
              <div className='row check'>
                <input type="checkbox" id="termsL" checked required></input> 
                <label for="termsL" checked required>I accept the <a href = "/terms">terms and conditions</a></label>
              </div>
              
              <button className='chkout' type ="submit" onClick={()=>setVisCont(!visCont)}>Place order</button>
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

export default Checkout;
