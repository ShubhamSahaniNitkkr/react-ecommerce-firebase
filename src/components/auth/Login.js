import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import fire from '../../config/fire';

export default class Login extends Component {
  constructor(props) {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onLogin = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
        BrowserRouter.push('/');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  onSignup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        alert('Registered !');
        BrowserRouter.push('/');
      })
      .catch((err) => {
        alert('Email has been already used');
      });
  };

  render() {
    return (
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
              value={this.state.email}
              name='email'
              onChange={this.onChange}
            />
            <br />
            <label htmlFor='inputPassword3'>
              <i className='fas fa-key text-primary'></i>&nbsp;Password :
            </label>
            <input
              type='password'
              className='form-control'
              id='inputPassword3'
              value={this.state.password}
              name='password'
              onChange={this.onChange}
            />
            <br />

            <button
              type='submit'
              className='btn btn-info'
              onClick={this.onLogin}
            >
              <i className='fas fa-sign-in-alt'></i> &nbsp; Log in
            </button>
            <br />
            <button
              type='submit'
              className='btn btn-outline-primary'
              onClick={this.onSignup}
            >
              <i className='fas fa-user-plus'></i> &nbsp; Signup
            </button>
          </div>
        </form>
      </div>
    );
  }
}
