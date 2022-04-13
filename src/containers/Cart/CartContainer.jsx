import React from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector, useStore } from 'react-redux';
import { checkout } from '~/actions/CartActions';
import { getTotal, getCartProducts } from '~/reducers';

import Cart from '~/components/Cart';

const CartContainer = ({ products, total, checkout }) => {
  console.log('## store in CartContainer',useStore().getState());
  console.log('## products in CartContainer',products);
  const store = useStore();
  const isFirstLoaded = store.getState().products.visibleIds?.length === 0 || false;

  if (isFirstLoaded) console.log('%c No Data!', 'color:yellow;font-size:20px;');
  
  return (
    <Cart
      products={products}
      total={total}
      onCheckoutClicked={() => checkout(products)}
    />
  )
};

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

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
});

export default connect(mapStateToProps, { checkout })(CartContainer);