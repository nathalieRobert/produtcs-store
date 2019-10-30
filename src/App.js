import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import ProductList from './Components/ProductList';

function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={ProductList}></Route>
        <Route exact path='/details' component={Details}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route  component={Default}></Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
