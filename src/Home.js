import React, { useState } from 'react';
import DarkPage from './DarkPage';

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
                    <h1 className = "white">Welcome to Cob's Soul Music</h1>
                    <br/> 
                    <br/>
                    <form className = "login">
                        <label for="accName">Username</label>
                        <input type="text" id="cname" name="cardname" placeholder="James Henry"></input>
                        <label for="accPass">Password</label>
                        <input type="text" id="ccnum" name="cardnumber" placeholder="123456"></input>
                        <br/>
                        <br/>
                        <button className = 'chkout' onClick={()=>setVisCont(!visCont)}>Log in</button>
                        <br/>
                        <br/>
                        <div className='row check'>
                                <input type="checkbox" id="termsL"  required checked></input> 
                        <label for="termsL" required id='xtFine'>By signing into my account I accept the <a href = './terms'>terms and conditions</a></label>
                        </div>
                    </form>
                </main>
            
        
            

            </div>
        </body>
        : <DarkPage/>
    }  
        </html>
     );
}
 
export default Home;
