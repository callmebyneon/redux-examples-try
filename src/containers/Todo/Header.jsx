import { connect } from 'react-redux';

import Header from '~/components/Todo/Header';
import { addTodo } from '~/actions/TodoAction';


export default connect(null, { addTodo })(Header);
