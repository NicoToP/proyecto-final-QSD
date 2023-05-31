export function OurInfo() {
  return (
    <>
      <div className='row bg-primary bg-opacity-10 rounded-4  justify-content-evenly m-1 p-5'>
        <div className='col-xl-7 col-lg-7 col-md-6 col-sm-12'>
          <h1 className='text-center m-4 p-2'>~ ¿Quienes somos? ~</h1>
          <p className='my-3'>
            Somos una veterinaria que brinda atención y cuidado integral a las
            mascotas. Nuestra página web es una plataforma que conecta a los
            dueños de las mascotas con nuestros veterinarios altamente
            capacitados.
          </p>
          <p className='my-3'>
          Nuestro equipo de veterinarios altamente calificados y experimentados se dedica a brindar atención de calidad y personalizada a cada paciente que llega a nuestras instalaciones. Además, nos esforzamos por mantenernos actualizados con los avances más recientes en medicina veterinaria y técnicas de tratamiento. Nuestra pasión por los animales se refleja en el trato amable, respetuoso y compasivo que brindamos a todas las mascotas que atendemos. Estamos aquí para escuchar sus preocupaciones, responder sus preguntas y trabajar en colaboración con usted para asegurarnos de que su mascota reciba el mejor cuidado posible.
          </p>
          <p className='my-3'>
            Confíe en nosotros para cuidar de su amado compañero peludo. Estamos
            comprometidos en proporcionar el mejor cuidado posible y en
            establecer una relación de confianza y respeto con usted y su
            mascota. ¡Bienvenido a nuestra veterinaria en línea!
          </p>
        </div>

        <div className='col-xl-4 col-lg-4 col-md-5 col-sm-12 align-self-center'>
          <img
            className='img-fluid mx-auto d-block'
            src='/img/vet.png'
            width='450'
            height='450'
            alt=''
          />
        </div>
      </div>

      <div className='row justify-content-around m-5 p-3'>
        <div className='col-xl-5 col-lg-5 col-md-10 col-sm-12 p-5 bg-primary bg-opacity-10 rounded-4 mb-3'>
          <div className='container-fluid d-flex align-items-center justify-content-center'>
            <h2 className='text-center'>Visión</h2>
            <img
              className='img-fluid mx-2'
              src='/img/vision.png'
              width='60'
              height='60'
              alt=''
            />
          </div>
          <p className='my-3'>
            Nos visualizamos como una veterinaria líder y confiable, reconocida
            por nuestro compromiso con la excelencia en el cuidado de las
            mascotas. Buscamos establecer relaciones duraderas con nuestros
            clientes y sus compañeros peludos, siendo su primera opción para
            todas sus necesidades veterinarias.
          </p>
        </div>
        <div className='col-xl-5 col-lg-5 col-md-10 col-sm-12 p-5 bg-primary bg-opacity-10 rounded-4 mt-2'>
          <div className='container-fluid d-flex align-items-center justify-content-center'>
            <h2 className='text-center'>Misión</h2>
            <img
              className='img-fluid mx-2'
              src='/img/mision.png'
              width='60'
              height='60'
              alt=''
            />
          </div>
          <p className='my-3'>
            Nuestra misión es proporcionar servicios veterinarios de calidad y
            un trato amable a todas las mascotas que nos visitan. Nos esforzamos
            por promover su bienestar y salud a través de un enfoque integral,
            combinando la atención médica y el amor por los animales.
          </p>
        </div>
      </div>
    </>
  )
}
