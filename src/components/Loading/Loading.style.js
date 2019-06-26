import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg);}
  to {transform: rotate(360deg);}
`;

const Wrapper = styled.div`
  width: 100%;
  padding: 50px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Loader = styled.div`
  width: 30px;
  height: 30px;
  border: 3px solid rgba(0,0,0,.1);
  border-top-color: #FFF;
  border-radius: 50%;
  animation: ${rotate} 2s linear infinite;
`;

export {
  Wrapper,
  Loader
}