import React from 'react';
import { useSelector } from 'react-redux';

import { getLargestImage, getSocialUrl } from './helpers/TicketMasterHelpers';

import SearchBar from './components/SearchBar/SearchBar.component';
import VideoList from './components/VideoList/VideoList.component';
import ArtistInfos from './components/ArtistInfos/ArtistInfos.component';
import Loading from './components/Loading/Loading.component';
import PoweredBy from './components/PoweredBy/PoweredBy.component';
import {
  GlobalStyle,
  View,
  Container
} from './App.style';

const App = () => {
  const videos = useSelector(state => state.videos);
  const artist_infos = useSelector(state => state.artist_infos);
  const isLoading = useSelector(state => state.loading);

  return (
    <>
      <GlobalStyle />
      <View>
        <SearchBar />
        <Container>
          {
            !!(artist_infos && Object.keys(artist_infos).includes('externalLinks') ) && (
              <ArtistInfos
                backgroundImage={ getLargestImage(artist_infos["images"]) }
                youtubeUrl={ getSocialUrl('youtube', artist_infos["externalLinks"]) }
                facebookUrl={ getSocialUrl('facebook', artist_infos["externalLinks"]) }
                instagramUrl={ getSocialUrl('instagram', artist_infos["externalLinks"]) }
              />
            )
          }
          { 
            isLoading
            ? <Loading />
            : <VideoList videos={videos}/>
          }
          <PoweredBy />
        </Container>
      </View>
    </>
  )
}

export default App;