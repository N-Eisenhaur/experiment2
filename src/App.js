import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import gallery from './components/pages/gallery';
 import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import recipes from './components/pages/recipes';

//creates links here

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/gallery' component={gallery} />
          <Route path='/recipes' component={recipes} />
          <Route path='/Products' component={Products} />

          <Route path='/sign-up' component={SignUp} />
          
        </Switch>
      </Router>
    </>
  );
}

export default App;
