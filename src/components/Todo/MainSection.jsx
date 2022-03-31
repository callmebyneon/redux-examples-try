import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Footer from './Footer';
import VisibleTodoList from '~/containers/Todo/VisibleTodoList';


const MainSection = ({ todosCount, completedCount, actions }) => (
  <CustomSection>
    {!!todosCount && (
      <span>
      <ToggleAll
        checked={completedCount === todosCount}
        readOnly
      />
      <label onClick={actions.completeAllTodos} />
    </span>
    )}
    <VisibleTodoList />
    {!!todosCount && (
      <Footer
        completedCount={completedCount}
        activeCount={todosCount - completedCount}
        onClearCompleted={actions.clearCompleted}
      />
    )}
  </CustomSection>
);

MainSection.propTypes = {
  todosCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
};

const CustomSection = styled.main``;

const ToggleAll = styled.input.attrs({ 
  className: 'toggle-all',
  type: 'checkbox'
})``;

export default MainSection;