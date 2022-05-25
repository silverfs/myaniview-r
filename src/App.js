import './App.css';
import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Manga from './Components/AniList/pages/manga';
import Profile from './Components/AniList/pages/profile'
import MangaList from './Components/AniList/pages/mangaList'
import CurrentManga from './Components/AniList/pages/currentManga';
import NotFound from './Components/AniList/pages/notFound';

function App() {
  return (
    <div className="App">
      <Navbar className='navbg' variant='dark' fixed='top' expand='md'>
        <Navbar.Brand href='/'>MAV</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href='/'>AniList</Nav.Link>
            <Nav.Link href='/'>Coming Soon</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
