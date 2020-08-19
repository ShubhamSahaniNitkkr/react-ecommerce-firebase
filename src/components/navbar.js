import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { ProductConsumer } from '../context';

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          const { closeModal, logout, user } = value;

          return (
            <nav className='navbar navbar-expand-lg navbar-light bg-light'>
              <Link to='/'>
                <img src={logo} alt={logo} className='navbar-brand' />
              </Link>

              <ul className='navbar-nav mr-auto'>
                <li className='nav-item active'>
                  <Link to='/' className='nav-link'>
                    ATOZ Products
                  </Link>
                </li>
              </ul>

              {user && (
                <Link to='/cart' className='ml-auto'>
                  <button
                    type='button'
                    className='btn btn-info'
                    onClick={() => closeModal()}
                  >
                    {' '}
                    <i className='fas fa-shopping-bag'></i> My Cart
                  </button>
                </Link>
              )}

              {user && (
                <Link to='/'>
                  <button
                    type='button'
                    className='btn btn-danger ml-1'
                    onClick={() => logout()}
                  >
                    {' '}
                    <i className='fas fa-sign-out-alt'></i> Logout
                  </button>
                </Link>
              )}
            </nav>
          );
        }}
      </ProductConsumer>
    );
  }
}
