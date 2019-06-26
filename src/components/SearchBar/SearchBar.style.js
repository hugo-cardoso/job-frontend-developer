import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 110px;
  padding: 35px 0;
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  width: auto;
  max-width: 100%;
  height: 55px;
  display: flex;
`;

const Input = styled.input`
  width: ${ ({lenght}) => lenght ? `${(lenght * 35)}px` : '230px' };
  max-width: 100%;
  height: 100%;
  text-align: center;
  font-size: 45px;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: #000;
  border: 0;
  flex: 1;
  padding: 0;

  :focus {outline: none;}

  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 15px;
    box-sizing: content-box;
  }
`;

const ClearButton = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
  cursor: pointer;

  svg path { 
    fill: #ccc;
    transition: all .2s linear;
  }

  :hover {
    svg path { fill: #696969; }
  }
`;

const SearchIcon = styled.div`
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;

  svg path { fill: #ccc; }
`;

export {
  Wrapper,
  Form,
  InputWrapper,
  Input,
  ClearButton,
  SearchIcon
};