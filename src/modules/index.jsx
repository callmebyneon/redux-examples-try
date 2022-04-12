import { combineReducers } from 'redux';

//* Todo
import todos from './Todo/todos';
import visibilityFilter from './Todo/visibilityFilter';

//* Cart
import cart, * as fromCart from './Cart/cart';
import products, * as fromProducts from './Cart/products';


const getAddedIds = state => fromCart.getAddedIds(state.cart);
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id);
const getProduct = (state, id) => fromProducts.getProduct(state.products, id);

export const getTotal = state => {
  console.log('1 state',state);
  //> {
  //   "todos": [
  //       {
  //           "text": "Use Redux",
  //           "completed": false,
  //           "id": 0
  //       }
  //   ],
  //   "visibilityFilter": "show_all",
  //   "cart": {
  //       "addedIds": [],
  //       "quantityById": {}
  //   },
  //   "products": {
  //       "byId": {},
  //       "visibleIds": []
  //   }
  // }

  return getAddedIds(state)
          .reduce((total, id) =>
            total + getProduct(state, id).price * getQuantity(state, id),
            0
          )
          .toFixed(2);
};

export const getCartProducts = state => {
  
  console.log('2 state',state);
  getAddedIds(state).map(id => ({
    ...getProduct(state, id),
    quantity: gqtQuantity(state, id)
  }))
}


// Root Reducer
const rootReducer = combineReducers({
  todos,
  visibilityFilter,
  cart,
  products
});

export default rootReducer;