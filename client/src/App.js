import "./App.css";
import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  NotFoundPage,
  PetPage,
  ServicesPage,
  ProductsPage,
} from "./pages/index";
import { PetProvider } from "./context/petContext";
import { Navbar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container-fluid p-0">
      <Navbar />
      <PetProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/pets" element={<PetPage />} />
          <Route path="/pets/:id" element={<PetPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </PetProvider>
      <Footer />
    </div>
  );
}

export default App;
