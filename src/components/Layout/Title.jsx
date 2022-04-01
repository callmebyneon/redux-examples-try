import React from 'react';
import styled from 'styled-components';

const Title = styled(({ className, children }) => (
  <h1 className={className}>{children}</h1>
))`
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
`;

export default Title;