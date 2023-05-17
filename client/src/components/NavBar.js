import { Link } from "react-router-dom";

export function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient ">
      <div className="container-fluid p-2">
        <Link className="navbar-brand fs-2 mx-4" to="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="70"
            height="70"
            className="d-inline-block align-text-center mx-2"
          />
          Vet-Vet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-center">
          <ul className="navbar-nav">
            <li className="nav-item fs-5 mx-3">
              <Link className="nav-link" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item fs-5  mx-3">
              <Link className="nav-link" to="/appointments">
                Citas Medicas
              </Link>
            </li>
            <li className="nav-item fs-5  mx-3">
              <Link className="nav-link" to="/services">
                Servicios
              </Link>
            </li>
            <li className="nav-item fs-5  mx-3">
              <Link className="nav-link" to="/products">
                Productos
              </Link>
            </li>
            <li className="nav-item fs-5  mx-3">
              <Link className="nav-link" to="/contact">
                Contactanos
              </Link>
            </li>
            <li className="nav-item fs-5  mx-3">
              <Link classNameName="nav-link" to="/profile">
                Perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
