import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  margin-bottom: 15px;
  color: #606060;
  font-weight: 400; 
`;

const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Item = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Logo = styled.img`
  height: 25px;
`;

export {
  Wrapper,
  List,
  Item,
  Logo,
  Title
};