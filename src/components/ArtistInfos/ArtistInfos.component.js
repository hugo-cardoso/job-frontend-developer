import React from 'react';
import Icon from '@mdi/react'
import { 
  mdiFacebook,
  mdiInstagram,
  mdiYoutube
} from '@mdi/js'
import {
  Wrapper,
  SocialIcon,
  SocialIconList
} from './ArtistInfos.style';

const ArtistInfos = ({
  backgroundImage,
  facebookUrl,
  instagramUrl,
  youtubeUrl
}) => {

  return (
    <Wrapper backgroundImage={backgroundImage}>
      <SocialIconList>
        {
          !!facebookUrl && (
            <SocialIcon 
              target="_blank"
              href={ facebookUrl }
            >
              <Icon 
                size={1}
                path={mdiFacebook}
              />
            </SocialIcon>
          )
        }
        {
          !!instagramUrl && (
            <SocialIcon 
              target="_blank"
              href={ instagramUrl }
            >
              <Icon 
                size={1}
                path={mdiInstagram}
              />
            </SocialIcon>
          )
        }
        {
          !!youtubeUrl && (
            <SocialIcon 
              target="_blank"
              href={ youtubeUrl }
            >
              <Icon 
                size={1}
                path={mdiYoutube}
              />
            </SocialIcon>
          )
        }
      </SocialIconList>      
    </Wrapper>
  )
}

export default ArtistInfos;