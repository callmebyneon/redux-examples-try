import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const ProductNamespace = styled.div`
  margin-right: 1rem;
  white-space: wrap;
  word-break: keep-all;
`;

const Product = ({ price, quantity, title }) => {
  return (
    <ProductNamespace>
      {title} - &#36;{price}{quantity ? ` x ${quantity}` : null}
    </ProductNamespace>
  );
};

Product.propTypes = {
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string
}

export default Product;