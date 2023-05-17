import { Link } from "react-router-dom";

export function Navbar() {
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
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="/img/logo.png"
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-text-top mr-3"
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
              <li key={item.name} className="nav-item">
                <Link to={item.path} className="nav-link">
                  <div className="list-item">{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
          <Link to="/signUp" className="btn btn-success">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
}
