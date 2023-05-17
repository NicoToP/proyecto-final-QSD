import {Route, Routes} from 'react-router-dom';
import {HomePage, NotFoundPage, PetPage, ServicesPage, ProductsPage} from './pages/index';
import {PetProvider} from './context/petContext';
import {Toaster} from 'react-hot-toast';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="container-fluid p-0">
    <NavBar/>
      <PetProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetPage />} />
          <Route path="/pets/:id" element={<PetPage />} />
          <Route path="/services" element={<ServicesPage />}/>
          <Route path="/products" element={<ProductsPage />}/>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </PetProvider>
    <Footer/>
    </div>
  );
}

export default App;
