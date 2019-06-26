import React from 'react';
import VideoItem from '../VideoItem/VideoItem.component';
import {
  ListWrapper,
  List,
  ListItem
} from './VideoList.style';

const VideoList = ({videos}) => {

  return (
    <ListWrapper>
      <List>
        {
          videos.map(video => {
            const { videoId } = video.id;
            const {
              title,
              description,
              thumbnails,
              channelTitle,
              channelId
            } = video.snippet;

            return (
              <ListItem>
                <VideoItem 
                  title={title}
                  description={description}
                  videoId={videoId}
                  thumbnail={thumbnails.medium.url}
                  channelTitle={channelTitle}
                  channelId={channelId}
                />
              </ListItem>
            )
          })
        }
      </List>
    </ListWrapper>
  )
}

export default VideoList;