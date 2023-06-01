import { Link } from 'react-router-dom'
export function ServicesPage() {
  return (
    <>
      <h1 className='text-center m-4 p-2'>¡Conoce nuestros servicios!</h1>

      <div className='row m-5 bg-secondary bg-opacity-10 rounded-4 p-3'>
        <div className='col-md-7 col-sm-12 p-5'>
          <h1 className='text-center my-2'>~ Baños/Peluquería ~</h1>
          <p className='my-3'>
            No solo mantengas a tus peluditos limpios con nosotros, sino que
            tambien aprovecha nuestro servicio de peluquería. Gatos y perros de
            todos los tamaños y de todos los tipos de pelo son bienvenidos.
          </p>

          <h1>Precios</h1>

          <div className='table-responsive'>
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>Tipo</th>
                  <th scope='col'>Pequeño</th>
                  <th scope='col'>Mediano</th>
                  <th scope='col'>Grande</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Básico</th>
                  <td>$50.000</td>
                  <td>$70.000</td>
                  <td>$90.000</td>
                </tr>
                <tr>
                  <th scope='row'>Medio</th>
                  <td>$70.000</td>
                  <td>$95.000</td>
                  <td>$120.000</td>
                </tr>
                <tr>
                  <th scope='row'>Premium</th>
                  <td>$90.000</td>
                  <td>$115.000</td>
                  <td>$150.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='text-center'>
            <Link
              to='#'
              className='btn btn-primary text-wrap'
              role='button'
              data-bs-toggle='button'
            >
              Agenda Aqui
            </Link>
          </div>
        </div>

        <div className='col-md-5 col-sm-12 align-self-center'>
          <img
            className='img-fluid mx-auto d-block '
            src='/img/Bano.png'
            alt=''
            height='450'
            width='450'
          />
        </div>
      </div>

      <div className='row m-5 bg-secondary bg-opacity-10 rounded-4 p-3'>
        <div className='col-md-5 col-sm-12 align-self-center'>
          <img
            className='img-fluid mx-auto d-block '
            src='/img/Guarderia.png'
            alt=''
            height='400'
            width='400'
          />
        </div>

        <div className='col-md-7 col-sm-12 p-5'>
          <h1 className='text-center my-2'>~ Guardería ~</h1>
          <p className='my-3'>
            ¿No tienes donde dejar y quien cuide a tu peludito? No te preocupes.
            Nosotros prestamos el servicio de guardería para todos los perritos
            y gatitos mientras disfrutas de tus vacaciones ó trabajas.
          </p>

          <h1>Precios</h1>

          <div className='table-responsive'>
            <table className='table table-striped table-bordered'>
              <thead>
                <tr>
                  <th scope='col'>Tipo</th>
                  <th scope='col'>Pequeño</th>
                  <th scope='col'>Mediano</th>
                  <th scope='col'>Grande</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Básico</th>
                  <td>$30.000</td>
                  <td>$50.000</td>
                  <td>$70.000</td>
                </tr>
                <tr>
                  <th scope='row'>Medio</th>
                  <td>$50.000</td>
                  <td>$75.000</td>
                  <td>$115.000</td>
                </tr>
                <tr>
                  <th scope='row'>Premium</th>
                  <td>$80.000</td>
                  <td>$120.000</td>
                  <td>$140.000</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='text-center'>
            <Link
              to='#'
              className='btn btn-primary text-wrap'
              role='button'
              data-bs-toggle='button'
            >
              Agenda Aqui
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
