import React, { useSelector } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addToCart } from '~/actions/CartActions';
import { getVisibleProducts } from '~/reducers/Cart/products';

import ProductItem from '~/components/Cart/ProductItem'
import ProductsList from '~/components/Cart/ProductsList'

const ProductsContainer = ({ products, addToCart }) => {
  return (
    <ProductsList title="Products">
      {products.map(product => 
        <ProductItem
          key={product.id}
          product={product}
          onAddToCartClicked={() => addToCart(product.id)}
        />)}
    </ProductsList>
  )
};

// export default ProductsContainer;

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