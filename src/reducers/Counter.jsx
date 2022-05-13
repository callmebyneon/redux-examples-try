//* Counter
import { call, put, takeEvery } from 'redux-saga/effects';
import { fetchNumber } from '../api/number';

//* Action Type
const type = {
  INCREAMENT: 'counter/INCREAMENT',
  DECREAMENT: 'counter/DECREAMENT',
  MULTIPLICATION: 'counter/MULTIPLICATION',
  APPLY_RANDOM: 'counter/APPLY_RANDOM',
  GET_RANDOM: 'counter/GET_RANDOM',
  RESET: 'counter/RESET',
}

//* Action Creator
export const increament = diff => ({ type: type.INCREAMENT, diff });
export const decreament = diff => ({ type: type.DECREAMENT, diff });
export const multiplication = diff => ({ type: type.MULTIPLICATION, diff });
export const reset = () => ({ type: type.RESET });

//* Thunk Function(s)
export const applyRandom = (max) => async (dispatch) => {
  dispatch({ type: type.GET_RANDOM });
  try {
    const randomNumber = await fetchNumber(max);
    dispatch({ type: type.INCREAMENT, diff: randomNumber });
    const randomNumber2 = await fetchNumber(max);
    dispatch({ type: type.MULTIPLICATION, diff: randomNumber2 });
    dispatch({ type: type.GET_RANDOM });
  } catch (e) {
    dispatch({ type: type.GET_RANDOM, error: e });
  }
};

//* Saga
function* applyRandomSaga(action) {
  yield call(action.setLoading, true)
  const random1 = yield call(fetchNumber, action.max);
  yield put(increament(random1));
  const random2 = yield call(fetchNumber, action.max);
  yield put(multiplication(random2));
  yield call(action.setLoading, false)
}
export function* counterSaga() {
  yield takeEvery(type.APPLY_RANDOM, applyRandomSaga)
}

const initialState = {
  isLoading: false,
  count: 0,
  path: "0"
}

const counter = (state = initialState, action) => {
  switch (action.type) {
    case type.INCREAMENT: 
      return {
        ...state,
        count: state.count + action.diff,
        path: `${state.path === "0" ? "" : state.path + " + "}${action.diff}`
      };
    case type.DECREAMENT: 
      return {
        ...state,
        count: state.count - action.diff,
        path: `${state.path === "0" ? "" : state.path + " - "}${action.diff}`
      };
    case type.MULTIPLICATION: 
      return {
        ...state,
        count: state.count * action.diff,
        path: `${state.path === "0" ? "" : state.path + " * "}${action.diff}`
      };
    case type.GET_RANDOM:
      return {
        ...state,
        isLoading: !state.isLoading
      };
    case type.RESET:
      return initialState;
    default:
      return state
  }
};

export default counter;