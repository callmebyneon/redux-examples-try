import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '~/actions/CartActions';
import { getVisibleProducts } from '~/modules/Cart/products';

import ProductItem from '~/components/Cart/ProductItem'
import ProductsList from '~/components/Cart/ProductsList'

const ProductsContainer = ({ products, addToCart }) => (
  <ProductsList title="Products">
    {products.map(product => 
      <ProductItem
        key={product.id}
        product={product}
        onAddRoCartClicked={() => addToCart(product.id)}
      />)}
  </ProductsList>
);

ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  })).isRequired,
  addToCart: PropTypes.func.isRequired
}

export default connect(
  //MapStateToProps
  (state) => ({ products: getVisibleProducts(state.products) }),
  { addToCart }
  //MapDispatchToProps
)(ProductsContainer);