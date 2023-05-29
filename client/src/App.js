import './App.css'
import React, { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import {
  HomePage,
  NotFoundPage,
  PetPage,
  ServicesPage,
  ProductsPage,
  AppointmentsPage,
  UserPage,
  OurInfo,
} from './pages/index'
/* import { Navbar } from './components/Navbar' */
import { Footer } from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { PetProvider } from './context/petContext'
import { AppointmentProvider } from './context/AppointmentsContext'

import AuthService from './services/auth.service'

import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import { Home } from './components/Home'
import { BoardUser } from './components/BoardUser'
import { BoardModerator } from './components/BoardModerator'
import { BoardAdmin } from './components/BoardAdmin'

function App() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, [])

  const logOut = () => {
    AuthService.logout()
  }

  return (
    <>
      {/* <Navbar /> */}
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <Link to={'/'} className='navbar-brand'>
          bezKoder
        </Link>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/home'} className='nav-link'>
              Home
            </Link>
          </li>

          {showModeratorBoard && (
            <li className='nav-item'>
              <Link to={'/mod'} className='nav-link'>
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className='nav-item'>
              <Link to={'/admin'} className='nav-link'>
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className='nav-item'>
              <Link to={'/user'} className='nav-link'>
                User
              </Link>
            </li>
          )}
        </div>

        {currentUser ? (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to={'/profile'} className='nav-link'>
                {currentUser.username}
              </Link>
            </li>
            <li className='nav-item'>
              <a href='/login' className='nav-link' onClick={logOut}>
                LogOut
              </a>
            </li>
          </div>
        ) : (
          <div className='navbar-nav ml-auto'>
            <li className='nav-item'>
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
            </li>

            <li className='nav-item'>
              <Link to={'/register'} className='nav-link'>
                Sign Up
              </Link>
            </li>
          </div>
        )}
      </nav>
      <AppointmentProvider>
        <PetProvider>
          <div className='container-fluid'>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/pets' element={<PetPage />} />
              <Route path='/pets/:id' element={<PetPage />} />
              <Route path='/appointments' element={<AppointmentsPage />} />
              <Route path='/services' element={<ServicesPage />} />
              <Route path='/products' element={<ProductsPage />} />
              <Route path='/AboutUs' element={<OurInfo />} />
              <Route path='/perfil' element={<UserPage />} />
              <Route path='*' element={<NotFoundPage />} />

              <Route path='/home' element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/user' element={<BoardUser />} />
              <Route path='/mod' element={<BoardModerator />} />
              <Route path='/admin' element={<BoardAdmin />} />
            </Routes>
            <Toaster />
          </div>
        </PetProvider>
      </AppointmentProvider>
      <Footer />
    </>
  )
}

export default App
