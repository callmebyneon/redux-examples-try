import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

import TodoTextInput from './TodoTextInput';


const TodoItem = ({ todo, completeTodo, deleteTodo }) => {
  const [editing, setEditing] = useState(false);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  const handleSave = (id, text) => {
    if (text.length === 0) {
      deleteTodo(id);
    } else {
      editTodo(id, text);
    }
    setEditing(false);
  };

  return (
    <li
      className={classnames({
        completed: todo.completed,
        editing: editing
      })}
    >
      {editing && (
        <TodoTextInput
          text={todo.text}
          editing={editing}
          onSave={text => handleSave(todo.id, text)}
        />
      )}
      {!editing && (
        <ItemView>
          <Toggle
            checked={todo.completed}
            onChange={() => completeTodo(todo.id)}
          />
          <label
            onDoubleClick={handleDoubleClick}
          >{todo.text}</label>
        </ItemView>
      )}
    </li>
  )
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  editTodo: PropTypes.func.isRequired,
  deleteTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

const ItemView = styled.div``;

const Toggle = styled.input.attrs({ 
  className: 'toggle',
  type: 'checkbox'
})``;

export default TodoItem;