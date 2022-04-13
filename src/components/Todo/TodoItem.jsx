import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import classnames from 'classnames';

import TodoTextInput from './TodoTextInput';

import theme from '~/theme';


const TodoItem = ({ todo, editTodo, completeTodo, deleteTodo }) => {
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
          <DeleteButton
            onClick={() => deleteTodo(todo.id)}
          />
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

const ItemView = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Toggle = styled.input.attrs({ 
  className: 'toggle',
  type: 'checkbox'
})`
  margin: 0 1rem 0 0.5em;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1rem;
    height: 1rem;
    position: absolute;
    left: 0;
    top: 50%;
    transform: translate3D(0, -50%, 0);
    background-color: ${props => props.checked ? theme.input.color.checked.back : theme.input.color.default.back};
    border: 1px solid ${props => props.checked ? theme.input.color.checked.main : theme.input.color.default.main};
    border-radius: 4px;
  }

  &:before {
    content: '';
    display: block;
    width: 65%;
    height: 30%;
    border-left: 2px solid ${props => props.disabled ? theme.input.color.disabled.main : props.checked ? theme.input.color.checked.main : theme.input.color.default.back};
    border-bottom: 2px solid ${props => props.disabled ? theme.input.color.disabled.main : props.checked ? theme.input.color.checked.main : theme.input.color.default.back};
    transform: rotate(-45deg);
    position: absolute;
    top: 3px;
    left: 4px;
    z-index: 1;
  }

  & + label {
    text-decoration: ${props => props.checked ? 'line-through' : 'none'};
  }
`;

const DeleteButton = styled.button.attrs({ 
  className: 'destroy --i-b',
})`
  margin-left: auto;
  display: flex;
  border: 0;
  
  &:before {
    content: '';
    height: 1rem;
    border-right: 2px solid #4f4f4f;
    transform: translate3D(1px, 0, 0) rotate(45deg);
    transition: border-color .22s;
  }
  
  &:after {
    content: '';
    height: 1rem;
    border-right: 2px solid #4f4f4f;
    transform: translate3D(-1px, 0, 0) rotate(-45deg);
    transition: border-color .22s;
  }

  &:hover {
    &:before, &:after {
      border-color: #fb5c5c;
    }
  }
`;

export default TodoItem;