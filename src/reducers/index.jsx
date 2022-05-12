import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';

//* Todo
import todos from './Todo/todos';
import visibilityFilter from './Todo/visibilityFilter';

//* Cart
import cart, * as fromCart from './Cart/cart';
import products, * as fromProducts from './Cart/products';

//* Async
import { postsBySubreddit, selectedSubreddit } from './Async';

//* Counter
import counter, { counterSaga } from './Counter';


//******* for shopping cart functions
const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = state => {
  return getAddedIds(state)
  .reduce((total, id) =>
  total + getProduct(state, id).price * getQuantity(state, id),
  0
  )
  .toFixed(2);
};

export const getCartProducts = state => {
  return getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: getQuantity(state, id)
  }))
}

export function* rootSaga () {
  yield all([counterSaga()]);
}

// Root Reducer
export default combineReducers({
  todos,
  visibilityFilter,
  cart,
  products,
  postsBySubreddit,
  selectedSubreddit,
  counter,
});
