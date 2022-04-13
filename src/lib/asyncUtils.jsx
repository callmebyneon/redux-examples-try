// Function to make thunk by promise
export const createPromiseThunk = (type, promiseCreator) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];

  // promiseCreator가 하나의 파라미터만 받는다고 했을 때,
  return param => async dispatch => {
    dispatch({ type, param });
    try {
      const payload = await promiseCreator(param);
      dispatch({ type: SUCCESS, payload });
    } catch (e) {
      dispatch({ type: ERROR, payload: e, error: true });
    }
  }

  // promiseCreator에 여러 종류의 파라미터를 전달해야한다면 객체 타입의 파라미터를 받아오도록 함
  // 예: writeComment({ postId: 1, text: 'content...' });
};



// Utils for reducer
export const reducerUtils = {
  // 초기 상태
  initial: (initialData = null) => ({
    loading: false,
    data: initialData,
    error: null
  }),

  // 로딩중 상태
  loading: (prevState = null) => ({
    loading: true,
    data: prevState,
    error: null
  }),

  // 성공 상태
  success: payload => ({
    loading: false,
    data: payload,
    error: null
  }),

  // 실패 상태
  error: error => ({
    loading: false,
    data: null,
    error
  })
};



// Reducer to handle async actions
export const handleAsyncActions = (type, key) => {
  const [SUCCESS, ERROR] = [`${type}_SUCCESS`, `${type}_ERROR`];
  return (state, action) => {
    switch (action.type) {
      case type:
        return {
          ...state,
          [key]: reducerUtils.loading()
        }
      case SUCCESS:
        return {
          ...state,
          [key]: reducerUtils.success(action.payload)
        }
      case ERROR:
        return {
          ...state,
          [key]: reducerUtils.error(action.error)
        }
      default:
        return state;
    }
  }
}