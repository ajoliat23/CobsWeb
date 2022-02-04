import Navbar from './Navbar';
import Home from './Home';
import DarkPage from './DarkPage';
import LightPage from './LightPage';
import React from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
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
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
