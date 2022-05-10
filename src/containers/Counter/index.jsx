import React from 'react';
import styled from 'styled-components';

import { fetchNumber } from '../../api/number';

import OuterSection from '~/components/Layout/OuterSection';
import Title from '~/components/Layout/Title';

import theme from '~/theme';

const CalcResult = styled.p`
  margin-bottom: 0.5em;
  padding: 0.5em;
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1.4em;
`;
  
const CalcPath = styled.p`
  width: 100%;
  max-width: 460px;
  margin: 0.5em 0;
  padding: 0.5em;
  color: ${theme.text.color.default};
  background: ${theme.divider.color.default};
  border-radius: 0.5rem;
  text-align: right;
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 1.4em;
  word-break: break-all;
`;

const Stack = styled.div`
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
`;

const Counter = ({}) => {
  const [count, setCount] = React.useState(0);
  const [path, setPath] = React.useState(count.toString());

  const increase = (value) => {
    setCount(count + value);
    setPath(`${path === "0" ? "" : path + " + "}${value}`);
  };
  const decrease = (value) => {
    setCount(count - value);
    setPath(`${path === "0" ? "" : path + " - "}${value}`);
  };
  const addRandom = async function (max = 15) {
    const randomNumber = await fetchNumber(max);
    setCount(count + randomNumber);
    setPath(`${path === "0" ? "" : path + " + "}${randomNumber}`);
    console.log('#1 path',path, typeof path); // #1 path 0 string
    const randomNumber2 = await fetchNumber(max);
    setCount(count + randomNumber2);
    setPath(`${path === "0" ? "" : path + " + "}${randomNumber2}`);
    console.log('#2 path',path, typeof path); // #2 path 0 string
  };
  const reset = () => {
    setCount(0);
    setPath("0");
  };
  
  return (
    <OuterSection>
      <Title><em>Advanced</em> Counter</Title>
      <hr />
      {/* Advanced Counter */}
      <CalcResult>{count}</CalcResult>
      <CalcPath>{path}</CalcPath>
      <hr />
      <Stack direction="row">
        <button onClick={() => increase(1)}>+1</button>
        <button onClick={() => decrease(1)}>-1</button>
        <button onClick={() => increase(5)}>+5</button>
        <button onClick={() => decrease(5)}>-5</button>
      </Stack>
      <Stack direction="row">
        <button onClick={() => addRandom(30)}>add random number</button>
      </Stack>
      <Stack direction="row">
        <button onClick={reset}>reset</button>
      </Stack>
    </OuterSection>
  );
}

export default Counter;
