import React from 'react';
import { CssBaseline } from '@mui/material';
import { Route, Routes } from 'react-router-dom';

import useStyles from './styles';

import { Actors, Movies, MovieInformation, Profile, NavBar } from './index.js';

// import Actors from './Actors/Actors';
// import NavBar from './NavBar/NavBar';
// import Movies from './Movies/Movies';
// import MovieInformation from './MovieInformation/MovieInformation';
// import Profile from './Profile/Profile';

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<MovieInformation />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/actors/:id" element={<Actors />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
