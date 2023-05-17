import "./App.css";
import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, PetPage } from "./pages/index";
import { Navbar } from "./components/Navbar";
import { Navtop } from "./components/Navtop";
import { PetProvider } from "./context/petContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      {Navtop()}
      <div className="container-fluid">
        <PetProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/pets" element={<PetPage />} />
            <Route path="/pets/:id" element={<PetPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PetProvider>
      </div>
    </>
  );
}

export default App;
