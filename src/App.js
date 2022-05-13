import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router'
import Manga from './Components/AniList/pages/manga';
import Profile from './Components/AniList/pages/Profile'
import MangaList from './Components/AniList/pages/MangaList'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<Profile />} />
        <Route strict exct path="/manga" element={<MangaList />} />
        <Route strict exact path="/manga/:id" element={<Manga />} />
      </Routes>
    </div>
  );
}

export default App;
