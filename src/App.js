import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Details from './Components/Details';
import Cart from './Components/Cart';
import Default from './Components/Default';
import ProductList from './Components/ProductList';
import Carousel from "./Components/Carousel";
import Modal from "./Components/Modal"


function App() {
  return (
    <React.Fragment>
      <Navbar/>
      <Carousel/>
      <Switch>
        <Route exact path='/' component={ProductList}></Route>
        <Route exact path='/details' component={Details}></Route>
        <Route exact path='/cart' component={Cart}></Route>
        <Route  component={Default}></Route>
      </Switch>
      <Modal/>
    </React.Fragment>
  );
}

export default App;
