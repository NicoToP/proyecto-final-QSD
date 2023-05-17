import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top"
          />
          Vet-Vet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link to="/">INICIO</Link>
            </li>
            <li className="nav-item">
              <Link to="/appointments">CITAS MEDICAS</Link>
            </li>
            <li className="nav-item">
              <Link to="/services">SERVICIOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/products">PRODUCTOS</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact">CONTACTANOS</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
