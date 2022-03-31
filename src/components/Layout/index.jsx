import React from 'react';
import styled from 'styled-components';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <CustomNav>
      <ul>
        <li>
          <Link to="/">todos</Link>
        </li>
        <li>
          <Link to="/cart">shopping cart</Link>
        </li>
        <li className="disabled">
          <Link to="/async">async load</Link>
        </li>
      </ul>
    </CustomNav>

    <ContentLayout>
      <Outlet />
    </ContentLayout>
  </div>
);

const CustomNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0 16px;
  border-bottom: 1px solid #eee;
  z-index: 9;

  & > ul {
    display flex;
    flex-direction: row;
  }

  & > ul > li {
    margin: 1rem;

    &.disabled {
      color: #cbc8c8;

      & a { cursor: not-allowed}
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