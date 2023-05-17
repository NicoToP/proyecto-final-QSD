import {Link} from 'react-router-dom';

export function NavBar() {
  return (

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary bg-gradient ">
      <div class="container-fluid p-2">
          <Link class="navbar-brand fs-2 mx-4" href="/">
            <img
              src="/img/logo.png"
              alt="Logo"
              width="70"
              height="70"
              class="d-inline-block align-text-center mx-2"
            />
            Vet-Vet
          </Link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <div class="collapse navbar-collapse justify-content-center">
          <ul class="navbar-nav">
            <li class="nav-item fs-5 mx-3">
              <Link class="nav-link {{#if home}}active{{/if}}" href="/">
                Inicio
              </Link>
            </li>
            <li class="nav-item fs-5  mx-3">
              <Link
                class="nav-link {{#if appointments}}active{{/if}}"
                href="/appointments"
              >
                Citas Medicas
              </Link>
            </li>
            <li class="nav-item fs-5  mx-3">
              <Link
                class="nav-link {{#if services}}active{{/if}}"
                href="/services"
              >
                Servicios
              </Link>
            </li>
            <li class="nav-item fs-5  mx-3">
              <Link
                class="nav-link {{#if products}}active{{/if}}"
                href="/products"
              >
                Productos
              </Link>
            </li>
            <li class="nav-item fs-5  mx-3">
              <Link class="nav-link {{#if contact}}active{{/if}}" href="/contact">
                Contactanos
              </Link>
            </li>
            <li class="nav-item fs-5  mx-3">
              <Link class="nav-link {{#if profile}}active{{/if}}" href="/profile">
                Perfil
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
