import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import { Actors, Movies, MovieInformation, Profile, NavBar } from '.';

const App = () => (
  <div>
    <CssBaseline />
    <NavBar />
    <main>
      <Routes>
        <Route path="/" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieInformation />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/actors/:id" element={<Actors />} />
      </Routes>
    </main>
  </div>
);

export default App;
