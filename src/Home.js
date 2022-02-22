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
                        
                       <img class="img2" src = "/sandSole.jpeg" alt="Dover Sole" ></img>
                       
                    </center>
                    
                </td>
                <td> 
                    <center>
                      <img class="img2" src = "/GreySole.jpg" alt="Dover Sole"></img>
                     
                    </center>
                    
                </td>
            </tr>
            <tr>  
                <td> 
                    <center>
                        <img class="img2" src = "/greenSole.jpeg" alt="Dover Sole" ></img>
                    </center>
                       
                </td>
                <td> 
                    <center>
                       <img class="img2" src = "/southernSole.jpeg" alt="Dover Sole" ></img>
                    </center>
                    
                </td>
            </tr>
        
        </table>
    </center>
            

        </div>
     );
}
 
export default Home;
