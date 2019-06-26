import React from 'react';

import ticketMasterLogo from '../../images/ticketmaster_logo.svg';
import youtubeLogo from '../../images/youtube_logo.svg';

import {
  Wrapper,
  List,
  Item,
  Logo,
  Title
} from './PoweredBy.style';

const PoweredBy = () => (
  <Wrapper>
    <Title>Powered by:</Title>
    <List>
      <Item 
        target="_blank"
        href="https://www.ticketmaster.com/"
      >
        <Logo src={ ticketMasterLogo } />
      </Item>
      <Item 
        target="_blank"
        href="https://www.youtube.com/"
      >
        <Logo src={ youtubeLogo } />
      </Item>
    </List>
  </Wrapper>
)

export default PoweredBy;