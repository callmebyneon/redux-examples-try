//* Cart/
import shop from '~/api/shop';

//************* action types
import * as types from '~/constants/ActionTypes';

//************* thunk functions (async action creator function)
export const getAllProducts = () => async dispatch => {
  const products = await shop.getProducts();
  dispatch({ type: types.RECEIVE_PRODUCTS, products });
};
const addToCartUnsafe = (productId) => ({
  type: types.ADD_TO_CART,
  productId
});

export const addToCart = (productId) => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId));
  }
};
export const checkout = products => (dispatch, getState) => {
  console.log(getState());
  const { cart } = getState();

  dispatch({ type: types.CHECKOUT });
  shop.buyProducts(products, () => {
    dispatch({ type: types.CHECKOUT_SUCCESS, cart });
  })
};

// const receiveProducts = products => ({ type: types.RECEIVE_PRODUCTS, products });
// export const getAllProducts = () => dispatch => {
//   shop.getProducts(products => {
//     dispatch(receiveProducts(products))
//   })
// };
// const addToCartUnsafe = productId => ({ type: types.ADD_TO_CART, productId });
// export const addToCart = productId => {
//   (dispatch, getState) => {
//     if (getState().products.byId[productId].inventory > 0) {
//       dispatch(addToCartUnsafe(productId))
//     }
//   }
// };
// export const checkout = products => {
//   (dispatch, getState) => {
//     const { cart } = getState();

//     dispatch({
//       type: types.CHECKOUT
//     });
//     shop.buyProducts(products, () => {
//       dispatch({
//         type: types.CHECKOUT_SUCCESS,
//         cart
//       })
//     })
//   }
// };