import React from 'react';

const Home = () => {
    return ( 
        <div className="home">
            <h2>We have all your Sole needs!</h2>
            <center>
        <table>
            <tr>  
                <td> 
                    <center>
                        
                       <img class="img2" src = "/public/sandSole.jpeg" alt="Sand Sole" ></img>
                       
                    </center>
                    
                </td>
                <td> 
                    <center>
                      <img class="img2" src = "/GreySole.jpg" alt="Grey Sole"></img>
                     
                    </center>
                    
                </td>
            </tr>
            <tr>  
                <td> 
                    <center>
                        <img class="img2" src = "/greenSole.jpeg" alt="Green Sole" ></img>
                    </center>
                       
                </td>
                <td> 
                    <center>
                       <img class="img2" src = "/southernSole.jpeg" alt="Southern Sole" ></img>
                    </center>
                    
                </td>
            </tr>
        
        </table>
    </center>
            

        </div>
     );
}
 
export default Home;
