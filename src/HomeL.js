import React, { useState } from 'react';
import LightPage from './LightPage';

const Home = () => {

    const[visCont, setVisCont] = useState(false);
    const[chk, setChk] = useState(false);
    const[guest,setGuest] = useState(false);

    return ( 
       <html>

        {visCont===false ? 
        <body className = "home">
                <div>
                    <h1 className = "white">Welcome to Cob's Soul Music</h1>
                    <form className = "login">
                        
                        
                        <button className = 'chkout2' onClick={()=>setVisCont(true)}>Continue as Guest</button>
                        
                        <p>OR</p>
                        <label for="accName">Username</label>
                        <input type="text" id="cname" name="cardname" placeholder="John More Doe"></input>
                        <label for="accPass">Password</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444"></input>
                        <br/>
                        <br/>
                        <div className='row check'>
                                <input type="checkbox" id="termsL"  required onClick={()=>setChk(!chk)}></input> 
                            <label for="termsL" required>By signing into my account I accept the <a href = './terms'>terms and conditions</a></label>
                        </div>

                        {chk===true ? <button className = 'chkout' onClick={()=>setVisCont(!visCont)}>Log in</button>: <></>}
                        
                    </form>
                </div>
        </body>
        : <LightPage/>
    }  
        </html>
     );
}
 
export default Home;
