import React from 'react';

import Title from '~/components/Layout/Title';

import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

const Cart = () => (
  <>
    <Title>Shopping Cart</Title>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </>
)

export default Cart;