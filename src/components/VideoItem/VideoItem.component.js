import React from 'react';
import {
  Wrapper,
  ThumbnailWrapper,
  Thumbnail,
  ContentInfo,
  Title,
  Description,
  Channel
} from './VideoItem.style';

const VideoItem = ({
  title,
  description,
  videoId,
  thumbnail,
  channelTitle,
  channelId
}) => {

  return (
    <Wrapper
      target="parent"
      href={ `//www.youtube.com/watch?v=${ videoId }` }
    >
      <ThumbnailWrapper>
        <Thumbnail src={thumbnail}/>
      </ThumbnailWrapper>
      <ContentInfo>
        <Title dangerouslySetInnerHTML={{__html: title}} />
        <Channel>{ channelTitle }</Channel>
        <Description dangerouslySetInnerHTML={{__html: description}} />
      </ContentInfo>
    </Wrapper>
  )
}

export default VideoItem;