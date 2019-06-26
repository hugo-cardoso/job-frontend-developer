import React from 'react';
import { useSelector } from 'react-redux';

import { getLargestImage, getSocialUrl } from './helpers/TicketMasterHelpers';

import SearchBar from './components/SearchBar/SearchBar.component';
import VideoList from './components/VideoList/VideoList.component';
import ArtistInfos from './components/ArtistInfos/ArtistInfos.component';
import {
  GlobalStyle,
  View,
  Container
} from './App.style';

const App = () => {
  const videos = useSelector(state => state.videos);
  const artist_infos = useSelector(state => state.artist_infos);
  
  return (
    <>
      <GlobalStyle />
      <View>
        <SearchBar />
        <Container>
          {
            !!artist_infos && (
              <ArtistInfos
                backgroundImage={ getLargestImage(artist_infos["images"]) }
                youtubeUrl={ getSocialUrl('youtube', artist_infos["externalLinks"]) }
                facebookUrl={ getSocialUrl('facebook', artist_infos["externalLinks"]) }
                instagramUrl={ getSocialUrl('instagram', artist_infos["externalLinks"]) }
              />
            )
          }
          <VideoList videos={videos}/>
        </Container>
      </View>
    </>
  )
}

export default App;