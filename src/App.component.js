import React from 'react';
import { useSelector } from 'react-redux';

import SearchBar from './components/SearchBar/SearchBar.component';
import VideoList from './components/VideoList/VideoList.component';
import {
  GlobalStyle,
  View,
  Container
} from './App.style';

const App = () => {
  const videos = useSelector(state => state.videos);

  return (
    <>
      <GlobalStyle />
      <View>
        <SearchBar />
        <Container>
          <VideoList videos={videos}/>
        </Container>
      </View>
    </>
  )
}

export default App;