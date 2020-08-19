import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductContext } from './context';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Details from './components/details';
import Cart from './components/cart/cart';
import Default from './components/Default';
import Modal from './components/modal';

class App extends Component {
  componentDidMount() {
    let value = this.context;
    value.authListner();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/details' component={Details} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/' component={ProductList} />
          <Route component={Default} />
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}
App.contextType = ProductContext;
export default App;
