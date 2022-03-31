import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import FilterLink from '~/containers/Todo/FilterLink';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '~/constants/TodoFilters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

const Footer = ({ activeCount, completedCount, onClearCompleted }) => {
  const itemWord = activeCount === 1 ? 'item' : 'items';
  
  return (
    <CustomFooter>
      <TodoCount><strong>{activeCount || 'No'}</strong> {itemWord} left </TodoCount>

      <Filters>
        {Object.keys(FILTER_TITLES).map(filter => 
          <li key={filter}>
            <FilterLink filter={filter}>
              {FILTER_TITLES[filter]}
            </FilterLink>
          </li>
        )}
      </Filters>

      {!!completedCount && 
        <button className='clear_completed' onClick={onClearCompleted}>Clear completed</button>
      }
    </CustomFooter>
  )
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

const CustomFooter = styled.footer``;

const TodoCount = styled.span``;

const Filters = styled.ul``;

export default Footer;