import React from 'react';

import OuterSection from '~/components/Layout/OuterSection';
import Title from '~/components/Layout/Title';

import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';

const Cart = () => (
  <OuterSection>
    <Title>Shopping Cart</Title>
    <hr />
    <ProductsContainer />
    <hr />
    <CartContainer />
  </OuterSection>
);

export default Cart;