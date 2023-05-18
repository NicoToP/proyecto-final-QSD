export function RecordUser() {
  return (
    <>
      <nav class="nav d-flex justify-content-evenly">
        <button type="button" class="btn btn-outline-primary my-2">
          Baños
        </button>
        <button type="button" class="btn btn-outline-primary my-2">
          Guarderia
        </button>
        <button type="button" class="btn btn-outline-primary my-2">
          Peluqueria
        </button>
        <button type="button" class="btn btn-outline-primary my-2">
          Consultas Virtuales
        </button>
        <button type="button" class="btn btn-outline-primary my-2">
          consultas Presenciales
        </button>
      </nav>

      <h2 className="text-center">Titulo Según Selección</h2>
      <div className="table-responsive p-2">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">Fecha</th>
              <th scope="col">Mascota</th>
              <th scope="col">Profesional</th>
              <th scope="col">Precio</th>
              <th scope="col">Observación</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Básico</th>
              <td>$30.000</td>
              <td>$50.000</td>
              <td>$70.000</td>
              <td>$70.000</td>
            </tr>
            <tr>
              <th scope="row">Medio</th>
              <td>$50.000</td>
              <td>$75.000</td>
              <td>$115.000</td>
              <td>$70.000</td>
            </tr>
            <tr>
              <th scope="row">Premium</th>
              <td>$80.000</td>
              <td>$120.000</td>
              <td>$140.000</td>
              <td>$70.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
