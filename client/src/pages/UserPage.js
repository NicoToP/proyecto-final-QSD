import { Profile } from "../components/Profile";
import { AppointmentForm } from "../components/AppointmentForm";
import { RecordUser } from "../components/RecordUser";
import { useState, useEffect } from "react";


export function UserPage() {

  const [option, setOption] = useState();


  return (
    <>
      <div className="row">
        <div className="col-2 align-self-center mx-auto bg-secondary bg-opacity-10 rounded-3 p-4">
          <nav class="nav flex-column justify-content-around">
            <button type="button" class="btn btn-outline-primary my-2">
              Mi info
            </button>
            <button type="button" class="btn btn-outline-primary my-2">
              Registro mascotas
            </button>
            <button type="button" class="btn btn-outline-primary my-2">
              Historial
            </button>
            <button type="button" class="btn btn-outline-primary my-2">
              Agendar cita
            </button>
          </nav>
        </div>
        <div className="col-8 mx-auto bg-secondary bg-opacity-10 rounded-3 p-4">
          <h2 className="text-center">Seleccione una opción</h2>
          {/* <Profile/> */}
          {/* <AppointmentForm/> */} 
          {/* <RecordUser/>*/} 
        </div>
      </div>
    </>
  );
}
