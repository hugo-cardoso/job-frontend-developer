import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px;
  background-color: #000;
  box-sizing: border-box;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url(${ ({backgroundImage}) => backgroundImage ? backgroundImage : '' });
    background-position: center;
    background-size: cover;
    z-index: 1;
    left: 0;
    top: 0;
    opacity: .3;
  }

  @media screen and (max-width: 768px) {
    width: calc(100% + 30px);
    margin-left: -15px;
    margin-right: -15px;
  }
`;

const SocialIconList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  z-index: 2;
`;

const SocialIcon = styled.a`
  svg path {
    fill: #FFF;
  }
`;

export {
  Wrapper,
  SocialIconList,
  SocialIcon
};