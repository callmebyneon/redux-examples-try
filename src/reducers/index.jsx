import { combineReducers } from 'redux';
import todos from './Todo/todos';
import visibilityFilter from './Todo/visibilityFilter';

const rootReducer = combineReducers({
  todos,
  visibilityFilter
});

export default rootReducer;