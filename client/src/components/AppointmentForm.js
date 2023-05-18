export function AppointmentForm() {
  return (
    <>
      <form className="container mx-auto p-5 rounded-4">
        <h3 className="text-center mb-4">Agenda tu cita</h3>
        <div className="row">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example2">
                Nombre de tu peludito
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Selecciona tu mascota</option>
                <option value="Nana">Nana</option>
                <option value="Pepe">Pepe</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example2">
                ¿Qué agendamos hoy?
              </label>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected>Selecciona tu cita</option>
                <option value="Bano">Baño</option>
                <option value="Guarderia">Guardería</option>
                <option value="Peluqueria">Peluqueria</option>
                <option value="Consulta virtual">Consulta Vitual</option>
                <option value="Consulta presencial">Consulta presencial</option>
              </select>
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" for="form8Example5">
                ¿Cuál día es perfecto para ti?
              </label>
              <input type="date" id="form8Example5" className="form-control" />
            </div>
          </div>
        </div>

        <hr />

        <div className="row">
          <div className="col">
            <div className="form-outline">
              <label for="exampleFormControlTextarea1" className="form-label">
                ¿Deseas contarnos algo extra?
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="2"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="d-grid gap-2 col-2 my-4 mx-auto">
          <button class="btn py-2 btn-outline-success" type="button">
            ¡Agendar!
          </button>
        </div>
      </form>
    </>
  );
}
