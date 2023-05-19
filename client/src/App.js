import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
	HomePage,
	NotFoundPage,
	PetPage,
	ServicesPage,
	ProductsPage,
	AppointmentsPage,
	UserPage,
	OurInfo,
} from './pages/index';
import { PetProvider } from './context/petContext';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<>
			<Navbar />
			<div className='container-fluid'>
				<PetProvider>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/pets' element={<PetPage />} />
						<Route path='/pets/:id' element={<PetPage />} />
						<Route path='/appointments' element={<AppointmentsPage />} />
						<Route path='/services' element={<ServicesPage />} />
						<Route path='/products' element={<ProductsPage />} />
						<Route path='/quienesomos' element={<OurInfo />} />
						<Route path='/perfil' element={<UserPage />} />
						<Route path='*' element={<NotFoundPage />} />
					</Routes>
					<Toaster />
				</PetProvider>
			</div>
			<Footer />
		</>
	);
}

export default App;
