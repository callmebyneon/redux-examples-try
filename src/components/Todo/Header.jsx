import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TodoTextInput from './TodoTextInput'

const Header = ({ addTodo }) => (
  <HeaderSection>
    <TodoTextInput
      newTodo
      onSave={text => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="what needs to be done?"
    />
  </HeaderSection>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

const HeaderSection = styled.header``;

export default Header;