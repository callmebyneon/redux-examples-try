import styled from 'styled-components';

const OuterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: fit-content;
  position: relative;

  & > * {
    width: 100%;
  }
`;

export default  OuterSection;