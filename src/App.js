import React, { useState, useEffect } from "react";
import * as yup from 'yup'
import axios from 'axios'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/Home'
import Pizza from './components/Pizza'



const App = () => {
  return (
    
      <div className='home'>
        <h1>Lambda Eats</h1>
        <p>Program your pizza!</p>
        <div className='Navigation'>
          <Link to='/'>Home</Link>
          <Link to='/pizza'>Order</Link>
        </div>
        <div className='routes'>
          <Switch>
            <Route path='/pizza'>
              <Pizza/>
            </Route>
            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </div>
      </div>
    
  );
};
export default App;
