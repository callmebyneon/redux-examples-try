import React from 'react';
import styled from 'styled-components';
import { NavLink, Outlet } from 'react-router-dom';

import theme from '~/theme';

const Layout = () => {
  const navItems = [
    { id: 0, path: '/', text: 'todos' },
    { id: 1, path: '/cart', text: 'shopping cart' },
    { id: 2, path: '/async', text: 'async load' },
    { id: 3, path: '/counter', text: 'advanced counter' },
    { id: 4, path: '/ismatch', html: <i>Is this existed page?</i> },
  ]
  return (
    <div>
      <CustomNav>
        <ul>
          {navItems.map(nav => (
            <li key={nav.id}>
              <NavLink
                className={({ isActive }) => isActive ? "active" : null}
                to={nav.path}
              >{nav.text || nav.html}</NavLink>
            </li>
          ))}
        </ul>
      </CustomNav>

      <ContentLayout>
        <Outlet />
      </ContentLayout>
    </div>
)
};

const CustomNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 16px;
  background: ${theme.background.default};
  border-bottom: 1px solid ${theme.divider.color.default};
  z-index: 9;

  & > ul {
    display: flex;
    flex-direction: row;
  }

  & > ul > li {
    margin: 1rem;

    & .active {
      font-weight: bold;
      border-bottom: 2px solid;
    }

    &.disabled {
      color: ${theme.text.color.disabled};

      & a { 
        cursor: not-allowed
      }
    }
  }

  & > ul > li a {
    color: inherit;
    text-decoration: none;
    
    &:active, &:visited {
      color: inherit;
    }
  }
`;

const ContentLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 60px 1rem 1rem;
  position: relative;
`;

export default Layout;