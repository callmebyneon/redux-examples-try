import React from 'react';
import styled from 'styled-components';

import OuterSection from '../../components/Layout/OuterSection';
import Header from './Header';
import MainSection from './MainSection';


const Todo = () => (
  <OuterSection>
    <Header />
    <MainSection />
    <Copyright>Todos with MVC <a href="https://ko.redux.js.org/introduction/examples/#todomvc" target="_blank">following example</a></Copyright>
  </OuterSection>
);

const Copyright = styled.span`
  margin-top: 2em;
  color: #cbc8c8;
  font-size: 14px;
  font-style: oblique;

  & > a {
    color: inherit;
    text-decoration: underline;
  }
`;

export default Todo;