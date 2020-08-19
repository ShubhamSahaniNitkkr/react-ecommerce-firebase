import React from 'react';

export default function CartTotal({ value, history }) {
  const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
  return (
    <React.Fragment>
      <table className='table table-bordered text-right table-hover'>
        <thead>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>SubTotalt</th>
            <th scope='col'>Tax</th>
            <th scope='col'>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {' '}
              <button className='btn btn-danger' onClick={() => clearCart()}>
                {' '}
                <i className='fas fa-trash-alt'></i> Clear cart
              </button>{' '}
            </td>
            <td>{cartSubTotal}</td>
            <td>{cartTax}</td>
            <td className='text-success h1'>
              {' '}
              <i className='fas fa-rupee-sign'></i> {cartTotal}
            </td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
}
