export function OurInfo() {
  return (
    <>
      <h1 className="text-center">¡Conocenos!</h1>
      <div className="row m-5 bg-secondary bg-opacity-10 rounded-4 p-3">
        <div className="col-md-7 col-sm-12 p-5">
          <h1 className="text-center m-4 p-2">~ ¿Quienes somos? ~</h1>
          <p className="my-3">
            Somos una veterinaria que brinda atención y cuidado integral a las
            mascotas. Nuestra página web es una plataforma que conecta a los
            dueños de las mascotas con nuestros veterinarios altamente
            capacitados.
          </p>
          <p className="my-3">
            Confíe en nosotros para cuidar de su amado compañero peludo. Estamos
            comprometidos en proporcionar el mejor cuidado posible y en
            establecer una relación de confianza y respeto con usted y su
            mascota. ¡Bienvenido a nuestra veterinaria en línea!
          </p>
        </div>

        <div className="col-md-5 col-sm-12">
          <img
            className="img-fluid mx-auto d-block"
            src="/img/vet.png"
            width="450"
            height="450"
            
          />
        </div>
      </div>

      <div className="row justify-content-around m-5 p-3">
        <div className="bg-secondary bg-opacity-10 rounded-4 col-md-5 col-sm-12 p-5">
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <h2 className="text-center">Visión</h2>
          <img className="img-fluid mx-2"
            src="/img/vision.png"
            width="50"
            height="50"
          />
        </div>
          <p className="my-3">
          Nos visualizamos como una veterinaria líder y confiable, reconocida por nuestro compromiso con la excelencia en el cuidado de las mascotas. Buscamos establecer relaciones duraderas con nuestros clientes y sus compañeros peludos, siendo su primera opción para todas sus necesidades veterinarias.
          </p>
        </div>
        <div className="bg-secondary bg-opacity-10 rounded-4 col-md-5 col-sm-12 p-5">
        <div className="container-fluid d-flex align-items-center justify-content-center">
          <h2 className="text-center">Misión</h2>
          <img className="img-fluid mx-2"
            src="/img/mision.png"
            width="50"
            height="50"
          />
        </div>
          <p className="my-3">
          Nuestra misión es proporcionar servicios veterinarios de calidad y un trato amable a todas las mascotas que nos visitan. Nos esforzamos por promover su bienestar y salud a través de un enfoque integral, combinando la atención médica y el amor por los animales.
          </p>
        </div>
      </div>
    </>
  );
}
