import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Todo from './Todo';

const TodoUL = styled.ul`
  display: block;
  min-width: 300px;
  max-width: 600px;
  padding: 1rem 1.5rem;
  border: 1px solid #808080;
`;
const PlaceholderLI = styled.li`
  padding: 0 0.5em;
  color: #cbc8c8;
  font-size: 0.88rem;
  list-style: none;
  font-style: oblique;
  text-align: center;
`;

const TodoList = ({ todos, onTodoClick }) => {
  // console.log('todos', todos); //: Array
  return (
    <TodoUL>
      {todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => onTodoClick(todo.id)}
        />
      )}
      {(!todos || !todos.length) && <PlaceholderLI>Add anything</PlaceholderLI>}
    </TodoUL>
  )
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;