import React from 'react';
import SearchBar from './components/SearchBar/SearchBar.component';
import {
  GlobalStyle,
  View
} from './App.style';

const App = () => {

  return (
    <>
      <GlobalStyle />
      <View>
        <SearchBar />
      </View>
    </>
  )
}

export default App;