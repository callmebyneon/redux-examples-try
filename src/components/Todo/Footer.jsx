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

      <ClearButton
        className='clear_completed'
        onClick={onClearCompleted}
        disabled={!completedCount}
      >Clear completed</ClearButton>
    </CustomFooter>
  )
};

Footer.propTypes = {
  completedCount: PropTypes.number.isRequired,
  activeCount: PropTypes.number.isRequired,
  onClearCompleted: PropTypes.func.isRequired,
};

const CustomFooter = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TodoCount = styled.span`
  color: #808080;

  & strong {
    color: #101010;
  }
`;

const Filters = styled.ul`
  display: flex;
  align-item: center;
  justify-contene: center;

  & li {
    & a {
      display: block;
      padding: 0 0.8rem;
      border: 1px solid #4f4f4f;
      border-left-width: 0;
      line-height: 2.2em;
      font-size: 14px;
      cursor: pointer;
      transition: background-color .22s;
      position: relative
      z-index: 1;

      &:not(.selected):hover {
        background-color: rgba(222, 222, 222, 0.8);
      }

      &.selected {
        cursor: inherit;
        background-color: #cbc8c8;
        border-color: #808080;
        color: #808080;
        z-index: -1;
      }
    }
    
    &:first-of-type a {
      border-left-width: 1px;
      border-radius: 4px 0 0 4px;
    }
    
    &:last-of-type a {
      border-radius: 0 4px 4px 0;
    }
  }
`;

const ClearButton = styled.button`
  visibility: ${props => props.disabled ? 'hidden' : 'visible'};
  font-size: 14px;
`;

export default Footer;