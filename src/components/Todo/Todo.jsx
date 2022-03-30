import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TodoItem = styled.li`
  list-style-type: none;
`;

const CompleteBox = styled.input`
  margin-right: 8px;
  vertical-align: text-bottom;
`;

const Todo = ({ onClick, completed, text }) => {
  return (
    <TodoItem
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <CompleteBox type="checkbox" checked={completed} readOnly />
      {text}
    </TodoItem>
  )
};

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Todo;
