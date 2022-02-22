import Navbar from './Navbar';
import Home from './Home';
import DarkPage from './DarkPage';
import LightPage from './LightPage';
import Terms from './Terms';
import Checkout from './components/Checkout';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() { //all this routing stuff i learned from The Net Ninja
  return (
    <Router>
      <div className ="App">
        <Navbar />
        <div className = "content"> 
          <Switch> 
            <Route exact path = "/">
              <Home />
            </Route>
            <Route path = "/darkpage">
              <DarkPage />
            </Route>
            <Route path = "/lightpage">
              <LightPage />
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
