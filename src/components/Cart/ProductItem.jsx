import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Product from './Product';

const ProductItemFlexbox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin-bottom: 20px;
`;

const ProductItem = ({ product, onAddToCartClicked }) => (
  <ProductItemFlexbox>
    <Product
      title={product.title}
      price={product.price}
      quantity={product.inventory}
    />
    <button
      onClick={onAddToCartClicked}
      disabled={product.inventory > 0 ? '' : 'disabled'}
    >
      {product.inventory > 0 ? 'Add to cart' : 'Sold Out'}
    </button>
  </ProductItemFlexbox>
);

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem;