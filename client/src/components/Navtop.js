import { Link } from "react-router-dom";

export function Navtop() {
  return (
    /*  Navbar  */
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      {/*  Container wrapper  */}
      <div class="container-fluid">
        {/*  Toggle button  */}
        <button
          class="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>

        {/*  Collapsible wrapper  */}
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          {/*  Navbar brand  */}
          <Link class="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </Link>
          {/*  Left links  */}
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Team
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/">
                Projects
              </Link>
            </li>
          </ul>
          {/*  Left links  */}
        </div>
        {/*  Collapsible wrapper  */}

        {/*  Right elements  */}
        <div class="d-flex align-items-center">
          {/*  Icon  */}
          <Link class="text-reset me-3" to="/">
            <i class="fas fa-shopping-cart"></i>
          </Link>

          {/*  Notifications  */}
          <div class="dropdown">
            <Link
              class="text-reset me-3 dropdown-toggle hidden-arrow"
              to="/"
              id="navbarDropdownMenuLink"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="fas fa-bell"></i>
              <span class="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </Link>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <Link class="dropdown-item" to="/">
                  Some news
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  Another news
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  Something else here
                </Link>
              </li>
            </ul>
          </div>
          {/*  Avatar  */}
          <div class="dropdown">
            <Link
              class="dropdown-toggle d-flex align-items-center hidden-arrow"
              to="/"
              id="navbarDropdownMenuAvatar"
              role="button"
              data-mdb-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                height="25"
                alt="Black and White Portrait of a Man"
                loading="lazy"
              />
            </Link>
            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li>
                <Link class="dropdown-item" to="/">
                  My profile
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  Settings
                </Link>
              </li>
              <li>
                <Link class="dropdown-item" to="/">
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/* Right elements */}
      </div>
      {/* Container wrapper */}
    </nav>
    /* Navbar */
  );
}
