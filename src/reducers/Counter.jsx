//* Counter
import { fetchNumber } from '../api/number';

//* Action Type
const type = {
  INCREAMENT: 'counter/INCREAMENT',
  DECREAMENT: 'counter/DECREAMENT',
  GET_RANDOM: 'counter/GET_RANDOM',
  GET_RANDOM_FAILURE: 'counter/GET_RANDOM_FAILURE',
  RESET: 'counter/RESET',
}

//* Action Creator
export const increament = diff => ({ type: type.INCREAMENT, diff });
export const decreament = diff => ({ type: type.DECREAMENT, diff });
export const reset = () => ({ type: type.RESET });

//* Thunk Functions
export const addRandom = (max) => async (dispatch) => {
  dispatch({ type: type.GET_RANDOM });
  try {
    const randomNumber = await fetchNumber(max);
    dispatch({ type: type.INCREAMENT, diff: randomNumber });
  } catch (e) {
    dispatch({ type: type.GET_RANDOM_FAILURE, error: e });
  }
};

const initialState = {
  isLoading: false,
  count: 0,
  path: "0"
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREAMENT: 
      return {
        isLoading: false,
        count: state.count + action.diff,
        path: `${state.path === "0" ? "" : state.path + " + "}${action.diff}`
      };
    case type.DECREAMENT: 
      return {
        isLoading: false,
        count: state.count - action.diff,
        path: `${state.path === "0" ? "" : state.path + " - "}${action.diff}`
      };
    case type.GET_RANDOM:
      return {
        ...state,
        isLoading: true
      };
    case type.GET_RANDOM_FAILURE:
      return {
        ...state,
        isLoading: false
      };
    case type.RESET:
      return initialState;
    default:
      return state
  }
};

export default counter;