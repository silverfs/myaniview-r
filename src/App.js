import './App.css';
import logo from './logo.png';
import React from 'react'
import Login from './Components/AniList/pages/login';
import { Route, Routes } from 'react-router'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import Manga from './Components/AniList/pages/manga';
import Profile from './Components/AniList/pages/profile'
import MangaList from './Components/AniList/pages/mangaList'
import CurrentManga from './Components/AniList/pages/currentManga';
import NotFound from './Components/AniList/pages/notFound';
import Dashboard from './Components/AniList/pages/dashboard';

function App() {
  return (
    <div className="App">
      <Navbar className='navbg' variant='dark' fixed='top' expand='md'>
        <Navbar.Brand href='/'>
          <img src={logo} alt='logo' className='logoMav' />
        </Navbar.Brand>
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
        <Route strict exact path='/mav/login' element={<Login />} />
        <Route strict exact path='/mav' element={<Dashboard />} />
        {/* 404 PAGE */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
