import React, { useState } from "react";
import './index.css';
import Game from './components/Game';
import Nav2 from './components/Nav2';
import StatusBar from './components/StatusBar';
import Store from './Store';
import Login from './components/Login';
import Thanks from './components/Thanks';
import Home from './Home';
import Recharge from './Recharge';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function template() { //all this routing stuff i learned from The Net Ninja
   
    return (
        <main>
            <Router>
      <div className ="App">
        
        <Home/>
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
            <Route path = "/login">
              <Login />
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

export default template;
