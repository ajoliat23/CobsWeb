import React, {useState} from 'react';

const StatusBarGuest = () => { 

    
    return ( 
        <html>
            <div className='status'>
                <h1>Login Bonus</h1>
                <p>Every Log in = <b className='sale'>FREE</b> bronze Cob Buck!</p>
                
                <img src = 'GuestBar.png' height='100px'></img>
                
                <p>Must have an account to unlock achievments.</p>
            </div>
        </html>
    );
}
 
export default StatusBarGuest;
