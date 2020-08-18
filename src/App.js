import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from './config/fire';

import Navbar from './components/navbar';
import ProductList from './components/productList';
import Details from './components/details';
import Cart from './components/cart';
import Default from './components/Default';
import Modal from './components/modal';

import Login from './components/auth/Login';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    this.authListner();
  }

  authListner() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />
        {this.state.user ? (
          <Switch>
            <Route exact path='/' component={ProductList} />
            <Route exact path='/details' component={Details} />
            <Route exact path='/cart' component={Cart} />
            <Route component={Default} />
          </Switch>
        ) : (
          <Login />
        )}

        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
