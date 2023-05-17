import { Link, useLocation } from "react-router-dom";

export function Navbar() {
  const location = useLocation();

  const menuData = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/appointments",
      name: "Citas Medicas",
    },
    {
      path: "/services",
      name: "Servicios",
    },
    {
      path: "/products",
      name: "Productos",
    },
    {
      path: "/contact",
      name: "Contactanos",
    },
    {
      path: "/pets",
      name: "Mascotas",
    },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient mb-5">
      <div className="container-fluid p-2">
        <Link className="navbar-brand fs-2 mx-4" to="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="50"
            height="50"
            className="d-inline-block align-text-center mx-2"
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
          <ul className="navbar-nav ms-auto">
            {menuData.map((item) => (
              <li key={item.name} className="nav-item fs-5 mx-3">
                <Link to={item.path} className="nav-link">
                  <div className="list-item">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ms-auto me-auto">
            <Link to="/profile" className="btn btn-success">
              Registrate
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
