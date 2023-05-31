import './App.css'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
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
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { PetProvider } from './context/petContext'
import { AppointmentProvider } from './context/AppointmentsContext'

import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

import Home from './components/Home'
import BoardUser from './components/BoardUser'
import BoardModerator from './components/BoardModerator'
import BoardAdmin from './components/BoardAdmin'

function App() {
  return (
    <>
      <Navbar />
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
