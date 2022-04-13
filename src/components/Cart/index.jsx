import React from 'react';
import PropTypes from 'prop-types';

import Product from './Product';

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products?.length > 0;
  const nodes = hasProducts ? (
    products.map(prod =>
      <Product
        title={prod.title}
        price={prod.price}
        quantity={prod.quantity}
        key={prod.id}
      />
    )
  ) : (
    <em>Please add some porducts to cart.</em>
  )
  
  return (
    <div>
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total: &#36;{total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? '' : 'disabled'}
      >
        Checkout
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default Cart;