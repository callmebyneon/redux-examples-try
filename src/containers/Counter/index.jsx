import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { increament, decreament, multiplication, applyRandom, reset } from '../../reducers/Counter';

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
  padding: 0.5em 0.815em;
  color: ${theme.text.color.default};
  background: ${theme.divider.color.default};
  border-radius: 0.5rem;
  text-align: right;
  font-size: 1.25rem;
  font-weight: normal;
  line-height: 1.4em;
  word-break: break-all;
  &~.loader {
    text-align: center;
  }
`;

const Stack = styled.div`
  width: 260px;
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-self: center;
  & button {
    width: 100%;
  }
`;

const Counter = () => {
  const [isLoading, setLoading] = React.useState(false);
  const { count, path } = useSelector(state => ({
    count: state.counter.count,
    path: state.counter.path,
  }));
  const dispatch = useDispatch();
  
  const onIncrease = diff => dispatch(increament(diff));
  const onDecrease = diff => dispatch(decreament(diff));
  const onMultiply = diff => dispatch(multiplication(diff));
  // const onApplyRandom = async (max = 15) => dispatch(applyRandom(max));
  const onApplyRandom = (max = 15) => {
    dispatch({ type: "counter/APPLY_RANDOM", setLoading, max });
  };
  const onReset = () => dispatch(reset());
  
  return (
    <OuterSection>
      <Title><em>Advanced</em> Counter</Title>
      <hr />
      {/* Advanced Counter */}
      <CalcResult>{count}</CalcResult>
      <CalcPath>{path}</CalcPath>
      {isLoading && <p className='loader'>loading...</p>}
      <hr />
      <Stack direction="row" strech>
        <button disabled={isLoading} onClick={() => onIncrease(1)}>＋1</button>
        <button disabled={isLoading} onClick={() => onDecrease(1)}>－1</button>
        <button disabled={isLoading} onClick={() => onIncrease(5)}>＋5</button>
        <button disabled={isLoading} onClick={() => onDecrease(5)}>－5</button>
      </Stack>
      <Stack direction="row">
        <button disabled={isLoading} onClick={() => onMultiply(2)}>×2</button>
        <button disabled={isLoading} onClick={() => onMultiply(5)}>×5</button>
      </Stack>
      <Stack direction="row">
        <button disabled={isLoading} onClick={() => onApplyRandom(10)}>＋× random number twice</button>
      </Stack>
      <Stack direction="row">
        <button disabled={isLoading} onClick={() => onReset()}>reset</button>
      </Stack>
    </OuterSection>
  );
};

export default Counter;
