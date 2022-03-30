import React, { useState } from "react";
import './index.css';
import Game from './components/GameL';
import Nav2 from './components/Nav2';
import Recharge from './RechargeL';
import Store from './StoreL';
import LoginL from './components/LoginL';
import Thanks from './components/Thanks';
import HomeL from './HomeL';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function templateL() { //all this routing stuff i learned from The Net Ninja
   
    return (
        <main>
            <Router>
      <div className ="App">
       
        <HomeL/>
        <div className = "content"> 
          <Switch> 

            <Route path = "/game">
              <Game />
            </Route>
            <Route path = "/store">
              <Store />
            </Route>
            <Route path = "/recharge">
              <Recharge />
            </Route>
            <Route path = "/loginL">
              <LoginL />
            </Route>
            <Route path = "/thanks">
              <Thanks />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

    
        </main>
    );
}

export default templateL;
