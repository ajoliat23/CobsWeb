import Navbar from './Navbar';
import Home from './Home';
import HomeL from './HomeL';
import Terms from './Terms';
import DarkPage from './DarkPage';
import LightPage from './LightPage';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() { //all this routing stuff i learned from The Net Ninja
  return (
    <Router>
      <div className ="App">
        <Navbar />
        <div className = "content"> 
        <Switch> 
            
            <Route path = "/darkpage">
              <Home />
            </Route>
            <Route path = "/lightpage">
              <HomeL />
            </Route>
            <Route path = "/terms">
              <Terms />
            </Route>
          </Switch>
        
        </div>
      </div>
    </Router>
  );
}

export default App;
