import { AppointmentForm } from "../components/AppointmentForm";
import { AppointmentsRecord } from "./AppointmentRecord";
import { Link } from "react-router-dom";

export function AppointmentsPage() {
  return (
    <>
      {/* <AppointmentForm/> */}
      {/* <AppointmentsRecord /> */}
      <h1 className="text-center m-4 p-2">
        ¡Ofrecemos dos tipos de consultas!
      </h1>

      <div className="row m-5 bg-secondary bg-opacity-10 rounded-4 p-3">
        <div className="col-md-7 col-sm-12 p-5">
          <h1 className="text-center">~Consulta Presencial~</h1>

          <div className="container mt-5">
            <p className=" m-0 fs-3">
              ¡No te preocupes!</p>

            <p className="fs-4">  Su salud está en las mejores manos.
            </p>
            <p className="my-3 fs-5">
              En nuestra consulta general, nos aseguramos de que tu mascota esté
              en el mejor estado, es por eso que nuestro equipo de veterinarios
              hará una revisión detallada de todos los aspectos importantes,
              desde su cabeza hasta sus patas, brindándole cuidados
              personalizados y soluciones efectivas.
            </p>
            <p className="my-3 fs-5">
              Recomendamos realizar consulta general de medicina preventiva
              veterinaria que ayuda a mejorar la calidad y duradera vida de tu
              mascota.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="#"
              className="btn btn-primary text-wrap m-2"
              role="button"
              data-bs-toggle="button"
            >
              Agenda Aqui
            </Link>
          </div>
        </div>

        <div className="col-md-5 col-sm-12">
          <img
            className="img-fluid mx-auto d-block"
            src="/img/veterinario.png"
            alt=""
          />
        </div>
      </div>
      <div className="row m-5 bg-secondary bg-opacity-10 rounded-4 p-3">
        <div className="col-md-5 col-sm-12">
          <img
            className="img-fluid mx-auto d-block"
            src="/img/veterinarios.png"
            alt=""
          />
        </div>
        <div className="col-md-7 col-sm-12 p-5">
          <h1 className="text-center">~Consulta Virtual o Domicilio~</h1>
          <div className="container mt-5">
            <p className="p-0 m-0 fs-3">¡No te preocupes si no puedes salir!</p>
            <p className="p-0 m-0 fs-4">
              Nosotros te asistimos a distancia o en tu casa.
            </p>
            <p className="my-3 fs-5">
              En nuestra consulta general, nos aseguramos de que tu mascota esté
              en el mejor estado, es por eso que nuestro equipo de veterinarios
              hará una revisión detallada de todos los aspectos importantes,
              desde su cabeza hasta sus patas, brindándole cuidados
              personalizados y soluciones efectivas.
            </p>
            <p className="my-3 fs-5">
              Recomendamos realizar consulta general de medicina preventiva
              veterinaria que ayuda a mejorar la calidad y duradera vida de tu
              mascota.
            </p>
          </div>

          <div className="text-center">
            <Link
              to="#"
              className="btn btn-primary text-wrap m-2"
              role="button"
              data-bs-toggle="button"
            >
              Agenda Aqui
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
