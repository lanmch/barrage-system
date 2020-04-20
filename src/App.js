import React from 'react';
import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';


import Login from './pages/login';
import VideoShow from './pages/video-show';
import VideoList from './pages/video-list';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route exact path='/videoshow' component={VideoShow} />
        <Route exact path='/videolist' component={VideoList} />
      </BrowserRouter>
    </div>
  );
}

export default App;
