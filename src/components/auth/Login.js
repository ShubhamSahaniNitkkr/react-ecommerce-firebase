import React, { Component } from 'react';
import { ProductContext, ProductConsumer } from '../../context';

export default class Login extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => (
          <div className='container-fluid pt-5'>
            <form>
              <div
                className='card mt-5 p-3 shadow bg-white rounded'
                style={{ width: '19rem', margin: '0 auto' }}
              >
                <i className='fas fa-sign-in-alt fa-5x text-info text-center'></i>
                <p className='text-center text-success'>Log in</p>
                <label htmlFor='inputEmail'>
                  <i className='fas fa-at text-primary'></i>&nbsp;Email :
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='inputEmail'
                  value={value.email}
                  name='email'
                  onChange={this.context.onChange}
                />
                <br />
                <label htmlFor='inputPassword3'>
                  <i className='fas fa-key text-primary'></i>&nbsp;Password :
                </label>
                <input
                  type='password'
                  className='form-control'
                  id='inputPassword3'
                  value={value.password}
                  name='password'
                  onChange={this.context.onChange}
                />
                <br />

                <button
                  type='submit'
                  className='btn btn-info'
                  onClick={this.context.onLogin}
                >
                  <i className='fas fa-sign-in-alt'></i> &nbsp; Log in
                </button>
                <br />
                <button
                  type='submit'
                  className='btn btn-outline-primary'
                  onClick={this.context.onSignup}
                >
                  <i className='fas fa-user-plus'></i> &nbsp; Signup
                </button>
              </div>
            </form>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

Login.contextType = ProductContext;
