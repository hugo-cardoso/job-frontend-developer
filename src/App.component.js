import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.component';
import VideoList from './components/VideoList/VideoList.component';
import {
  GlobalStyle,
  View,
  Container
} from './App.style';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <View>
        <SearchBar />
        <Container>
          <VideoList videos={[]}/>
        </Container>
      </View>
    </>
  )
}

export default App;