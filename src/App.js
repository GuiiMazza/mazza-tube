import React from 'react';
import store from './store'
import {Provider} from 'react-redux'
import SearchBar from './componentes/SearcheBar';
import VideoList from './componentes/VideoList';
import VideoPlayer from './componentes/VideoPlayer'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <SearchBar />
        <VideoList />
        <VideoPlayer />
      </div>
    </Provider>
  );
}

export default App;
