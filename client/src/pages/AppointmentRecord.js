import { NavRecordVertical } from "../components/NavRecordVertical";

export function AppointmentsRecord() {
  return (
    <>
      <div className="row p-4 justify-content-around bg-primary bg-opacity-10">
        <div className="col-3 p-4 bg-light rounded-3">
          <h2 className="text-center my-2">Historial</h2>
          <NavRecordVertical />
        </div>
        <div className="col-9">
        <h2 className="text-center">Titulo Según Selección</h2>
        <div className="table-responsive p-2">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th scope="col">Fecha</th>
                  <th scope="col">Dueño</th>
                  <th scope="col">Profesional</th>
                  <th scope="col">Observación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Básico</th>
                  <td>$30.000</td>
                  <td>$50.000</td>
                  <td>$70.000</td>
                </tr>
                <tr>
                  <th scope="row">Medio</th>
                  <td>$50.000</td>
                  <td>$75.000</td>
                  <td>$115.000</td>
                </tr>
                <tr>
                  <th scope="row">Premium</th>
                  <td>$80.000</td>
                  <td>$120.000</td>
                  <td>$140.000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
