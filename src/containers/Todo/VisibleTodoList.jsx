import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as TodoActionss from '~/actions/TodoActions';

import TodoList from '~/components/Todo/TodoList';
import { getVisibleTodos } from '~/selectors';

const mapStateToProps = state => ({
  filteredTodos: getVisibleTodos(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActionss, dispatch)
});


const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;