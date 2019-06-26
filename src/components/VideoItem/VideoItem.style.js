import styled from 'styled-components';

const Title = styled.h3`
  font-family: 'Roboto', sans-serif;
  color: #000;
  font-size: 18px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

const Wrapper = styled.a`
  width: 100%;
  display: flex;
  text-decoration: none;
  cursor: pointer;

  :hover {
    ${ Title } {
      text-decoration: underline;
    }
  }
`;

const ThumbnailWrapper = styled.div`
  width: 246px;
  min-width: 246px;
  margin-right: 16px;

  @media screen and (max-width: 768px) {
    width: 160px;
    min-width: 160px;
  }
`;

const Thumbnail = styled.img`
  width: 100%;
`;

const ContentInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const Channel = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #606060;
  font-weight: 400;
  margin-top: 5px;
`;

const Description = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  line-height: 15px;
  letter-spacing: .02rem;
  color: #606060;
  margin-top: 15px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export {
  Wrapper,
  ThumbnailWrapper,
  Thumbnail,
  ContentInfo,
  Title,
  Description,
  Channel
};