import React, {useState} from 'react';
import Thanks from './Thanks.js';

const Login = () => { 

  const[chk1, setChk1] = useState(false);
  const[chk2, setChk2] = useState(false);
    
  const[visCont, setVisCont] = useState(false);
    return (
        <html>
        {visCont===false ? 

        <div className='loginContainer'>
            <h1>Incantation of the Day</h1>
            <p className='incantation'>
            Volo videre tenebras aeternas <br/><br/>
            Ego certe amo tenebras<br/><br/>
            Vere fan tenebrarum<br/><br/>
            Me et tenebrae sunt sicut amici optimi<br/><br/>
            Ita vere gratum essem si habere possem infinitas tenebras<br/><br/>
            Hoc vere sit multum<br/><br/>
            Gratias tibi valde

            </p>

            <form>
            <div className='row check'>
                <input type="checkbox" id="terms" name="terms" value="terms" required onClick={()=>setChk1(!chk1)}></input> 
                <label for="terms">I have read the incantation above*</label>
              </div>
              <div className='row check'>
                <input type="checkbox" id="termsL" name="termsL" value="termsL" required onClick={()=>setChk2(!chk2)}></input> 
                <label for="termsL">I agree to be one step closer to dark mode!</label>
              </div>
              <p>* My checkmark here is equivalent to reciting this incantation outloud</p>

              {chk1===true && chk2===true ? <button className='chkout' onClick={()=>setVisCont(!visCont)}>Submit</button> : <></>}
              
            </form>

            
            <div className='status'>
                <h1>Login Bonus</h1>
                <p>Every Log in = free bronze Cob Buck!</p>
                { visCont === false ?
                <img src = 'partiallyDone.png' height='100px'></img> :
                <img src = 'Done.png' height='100px'></img>
                }
                <p>Log in for 1 more day(s) to unlock dark mode!</p>
            </div>
        
        </div>
    :
        <Thanks/> }
      </html>
       
       );
}

export default Login;
