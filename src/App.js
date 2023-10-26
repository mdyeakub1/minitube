import React from 'react';
import { Home } from './pages/Home';
import { Video } from './pages/Video';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/videos/:videoId' element={<Video />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
