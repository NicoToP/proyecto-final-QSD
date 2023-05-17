import { Route, Routes } from "react-router-dom";
import { HomePage, NotFoundPage, PetPage } from "./pages/index";
import { Navbar } from "./components/Navbar";
import { PetProvider } from "./context/petContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container-fluid">
      {Navbar()}
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
  );
}

export default App;
