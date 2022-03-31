import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TodoItem from './TodoItem';


const TodoList = ({ filteredTodos, actions }) => (
  <TodoListUnordered>
    {filteredTodos.map(todo =>
      <TodoItem key={todo.id} todo={todo} {...actions} />
    )}
  </TodoListUnordered>
);

TodoList.propTypes = {
  filteredTodos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  actions: PropTypes.object.isRequired
};

const TodoListUnordered = styled.ul.attrs({
  className: 'todo-list'
})`
  margin: 1rem 0;
  padding: 1rem;
  border-top: 1px solid;
  border-bottom: 1px solid;

  & > li {
    padding: 8px;
    
    &:before {
      content: ''
      display: block;
      position: absolute;
    }
  }
`;

export default TodoList;