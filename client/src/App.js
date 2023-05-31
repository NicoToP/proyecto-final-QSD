import './App.css'
import { Route, Routes } from 'react-router-dom'
import {
  HomePage,
  NotFoundPage,
  PetPage,
  ServicesPage,
  ProductsPage,
  AppointmentsPage,
  UserPage,
} from './pages/index'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Toaster } from 'react-hot-toast'
import { PetProvider } from './context/petContext'
import { AppointmentProvider } from './context/AppointmentsContext'

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
              <Route path='/perfil' element={<UserPage />} />
              <Route path='*' element={<NotFoundPage />} />
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
