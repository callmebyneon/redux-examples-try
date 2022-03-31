import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import TodoTextInput from './TodoTextInput'

const Header = ({ addTodo }) => (
  <HeaderSection>
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text);
        }
      }}
      placeholder="What needs to be done?"
    />
  </HeaderSection>
);

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
};

const HeaderSection = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  & h1 {
    max-width: 80vw;
    padding: 0 1rem;
    line-height: 2em;
    position: relative;

    // tooltip
    // &:after {
    //   content: 'Editable title';
    //   display: block;
    //   width: fit-content;
    //   padding: 0 1em;
    //   border-radius: 4px;
    //   position: absolute;
    //   left: 50%;
    //   bottom: -1.4em;
    //   transform: translate3D(-50%, 0, 0);
    //   color: #fefefe;
    //   white-space: nowrap;
    //   line-height: 2.2em;
    //   font-size: 14px;
    //   font-weight: normal;
    //   background: hsl(0deg 0% 9% / 80%);
    //   visibility: hidden;
    //   opacity: 0;
    //   transition: opacity .22s;
    // }

    // &:hover:after {
    //   visibility: visible;
    //   opacity: 1;
    // }
  }

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

export default Header;