//* Async/

//************* action types
import { asyncActionTypes as types } from '~/constants/ActionTypes';

//************* action creators
export const selectSubreddit = subreddit => ({ type: types.SELECT_SUBREDDIT, subreddit });
export const invalidateSubreddit = subreddit => ({ type: types.INVALIDATE_SUBREDDIT, subreddit });
export const requestPosts = subreddit => ({ type: types.GET_POSTS, subreddit });
export const receivePosts = (subreddit, posts) => ({
  type: types.GET_POSTS_SUCCESS,
  subreddit,
  posts,
  receivedAt: Date.now()
});

const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => response.json())
    .then(json => dispatch(
      receivePosts(
        subreddit,
        json.data.children.map(child => child.data)
      ))
    )
};

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit];
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate;
};

export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
};