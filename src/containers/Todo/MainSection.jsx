import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as TodoActionss from '~/actions/TodoActions';
import MainSection from '~/components/Todo/MainSection';
import { getCompletedTodoCount } from '~/selectors';


const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
});


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActionss, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);