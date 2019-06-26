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

export {
  GlobalStyle,
  View
};