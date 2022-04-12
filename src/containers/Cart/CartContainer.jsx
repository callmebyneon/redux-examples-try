import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { checkout } from '~/actions/CartActions';
import { getTotal, getCartProducts } from '~/modules';

import Cart from '~/components/Cart';

const CartContainer = ({ products, total, checkout }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
  />
);

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
};

export default connect(
  // MapStateToProps
  (state) => ({
    products: getCartProducts(state),
    total: getTotal(state)
  }),
  // MapDispatchToProps
  { checkout }
)(CartContainer);