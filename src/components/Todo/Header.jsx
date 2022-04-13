import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Title from '~/components/Layout/Title';
import TodoTextInput from './TodoTextInput';


const Header = styled(({ className, addTodo }) => (
  <header className={className}>
    <Title>todos</Title>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
))`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & input{
    &.new-todo {
      padding-left: 2.8rem;
    }
    
    &::placeholder {
      text-align: center;
      font-family: inherit;
      font-style: oblique;
    }
  }
`;

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

export default Header;