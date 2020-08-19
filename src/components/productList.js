import React, { Component } from 'react';
import { ProductContext } from '../context';

import Product from './product';
import Title from './title';
import Login from './auth/Login';

import { ProductConsumer } from '../context';

export default class ProductList extends Component {
  render() {
    return (
      <React.Fragment>
        {this.context.user ? (
          <React.Fragment>
            <Title name='Our' title='Products' />
            <div className='p-5'>
              <div className='row'>
                <ProductConsumer>
                  {(value) => {
                    return value.products.map((product) => {
                      return <Product key={product.id} product={product} />;
                    });
                  }}
                </ProductConsumer>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <Login />
        )}
      </React.Fragment>
    );
  }
}
ProductList.contextType = ProductContext;
