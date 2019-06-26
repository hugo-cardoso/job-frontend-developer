import styled, { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${ reset }
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700&display=swap');
`;

const View = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  width: 768px;
  max-width: 100%;
  margin: auto;
  box-sizing: border-box;
  
  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

export {
  GlobalStyle,
  View,
  Container
};