import React, { useState } from 'react';
import Login from './components/Login.js';

const Home = () => {

    const[visCont, setVisCont] = useState(false);

    return ( 
       <html>

        {visCont===false ? 
        <body className = "home">
            <div >
                
                <main >
                    <br/>
                    <br/>
                    <h1 className = "white">Welcome to Cob's Soulo Game</h1>
                    <br/> 
                    <br/>
                    <form className = "login">
                        <label for="accName">Username</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                        <label for="accPass">Password</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                        <br/>
                        <br/>
                        <button className = 'chkout' onClick={()=>setVisCont(!visCont)}>Log in</button>
                    </form>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p id = "xtFine">By signing into my account I accept the terms and conditions</p>
                </main>
            
        
            

            </div>
        </body>
        : <Login/>
    }  
        </html>
     );
}
 
export default Home;
