import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from './Footer';
import VisibleTodoList from '~/containers/Todo/VisibleTodoList';

import theme from '~/theme';


const MainSection = ({ todosCount, completedCount, actions }) => (
  <CustomSection>
    <CanToggle>
      <ToggleAll
        disabled={!todosCount}
        checked={!todosCount ? false : completedCount === todosCount}
        readOnly
      />
      <label onClick={actions.completeAllTodos} />
    </CanToggle>
    {!!todosCount && (
      <>
        <VisibleTodoList />
        <Footer
          completedCount={completedCount}
          activeCount={todosCount - completedCount}
          onClearCompleted={actions.clearCompleted}
        />
      </>
    )}
  </CustomSection>
);

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const CustomSection = styled.main`
  width: 100%;
  min-width: 460px;
`;

const CanToggle = styled.span`
  position: absolute;
  left: 0;
`;

const ToggleAll = styled.input.attrs({ 
  className: 'toggle-all',
  type: 'checkbox'
})`
  position: absolute;
  left: -1px;
  top:-1px;
  height: 0;
  width: 0;

  & + label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.4rem;
    height: 1.4rem;
    position: absolute;
    top: -2rem;
    left: 0.7rem;
    color: ${theme.input.color.default.back};
    background-color: ${props => props.disabled ? theme.input.color.disabled.main : props.checked ? theme.input.color.checked.back : theme.input.color.default.back};
    border: 1px solid ${props => props.disabled ? theme.input.color.disabled.main : props.checked ? theme.input.color.checked.main : theme.input.color.default.main};
    border-radius: 4px;
    line-height: 1em;
    font-size: 13px;
    font-weight: normal;
    user-select: none;

    &:before {
      content: '';
      display: block;
      width: 60%;
      height: 25%;
      border-left: 3px solid ${props => props.disabled ? theme.input.color.disabled.main : props.checked ? theme.input.color.checked.main : theme.input.color.default.back};
      border-bottom: 3px solid ${props => props.disabled ? theme.input.color.disabled.main : props.checked ? theme.input.color.checked.main : theme.input.color.default.back};
      transform: rotate(-45deg);
      position: relative;
      top: -1px;
    }

    // tooltip
    &:after {
      content: 'Click to change all todo status';
      display: block;
      width: fit-content;
      padding: 0 1em;
      border-radius: 4px;
      position: absolute;
      bottom: -2.6em;
      color: #fefefe;
      white-space: nowrap;
      line-height: 2.2em;
      font-size: 14px;
      font-weight: normal;
      background: hsl(0deg 0% 9% / 80%);
      visibility: hidden;
      opacity: 0;
      transition: opacity .22s;
    }

    &:hover:after {
      visibility: visible;
      opacity: 1;
    }
  }
`;

export default MainSection;