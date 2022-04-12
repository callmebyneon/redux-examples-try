import { connect } from 'react-redux';

import Header from '~/components/Todo/Header';
import { addTodo } from '~/actions/TodoActions';

export default connect(null, { addTodo })(Header);
