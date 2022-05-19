import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router'
import Manga from './Components/AniList/pages/manga';
import Profile from './Components/AniList/pages/profile'
import MangaList from './Components/AniList/pages/mangaList'
import CurrentManga from './Components/AniList/pages/currentManga';
import NotFound from './Components/AniList/pages/notFound';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path='/' element={<Profile />} />
        <Route strict exact path='/manga' element={<MangaList />} />
        <Route strict exact path='/current/manga/:userName' element={<CurrentManga />} />
        <Route strict exact path='/manga/:id' element={<Manga />} />
        {/* 404 PAGE */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
