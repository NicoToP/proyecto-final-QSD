export function TableHisto() {
  return (
    <>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th scope='col'>Fecha</th>
            <th scope='col'>Mascota</th>
            <th scope='col'>Profesional</th>
            <th scope='col'>Precio</th>
            <th scope='col'>Observación</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>Básico</th>
            <td>$30.000</td>
            <td>$50.000</td>
            <td>$70.000</td>
            <td>$70.000</td>
          </tr>
          <tr>
            <th scope='row'>Medio</th>
            <td>$50.000</td>
            <td>$75.000</td>
            <td>$115.000</td>
            <td>$70.000</td>
          </tr>
          <tr>
            <th scope='row'>Premium</th>
            <td>$80.000</td>
            <td>$120.000</td>
            <td>$140.000</td>
            <td>$70.000</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}
