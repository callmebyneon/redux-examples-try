import { asyncActionTypes as types } from '~/constants/ActionTypes';

const posts = (
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  }, action) => {
  switch (action.type) {
    case types.INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      }
    case types.GET_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      }
    case types.GET_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      }
    default:
      return state
  }

}

export const postsBySubreddit = (state = { }, action) => {
  switch (action.type) {
    case types.INVALIDATE_SUBREDDIT:
    case types.GET_POSTS_SUCCESS:
    case types.GET_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      }
    default:
      return state
  }
};

export const selectedSubreddit = (state = 'reactjs', action) => {
  switch (action.type) {
    case types.SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
};
