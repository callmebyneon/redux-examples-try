import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styled from 'styled-components';

const TodoTextInput = ({ onSave, text, placeholder, editing, newTodo }) => {
  const [value, setValue] = useState(text || '');

  const handleSubmit = e => {
    const text = e.target.value.trim();
    if (e.which === 13) { // press ENTER key
      onSave(text);
      
      if (newTodo) {
        setValue('');
      }
    }
  };

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleBlur = e => {
    if (!newTodo) {
      onSave(e.target.value);
    }
  };

  return (
    <TodoInput className={
      classnames({
        edit: editing,
        'new-todo': newTodo
      })}
      type="text"
      placeholder={placeholder}
      autoFocus={true}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      onKeyDown={handleSubmit}
    />
  )
};

TodoTextInput.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  editing: PropTypes.bool,
  newTodo: PropTypes.bool
};

const TodoInput = styled.input`
  width: 100%;
  padding: 0.5em 1em 0.5em;
  font-size: 1rem;
  border: 1px solid #4f4f4f;
  border-radius: 6px;
  font-family: inherit;
  line-height: 1em;
`;

export default TodoTextInput;