export function OurServices() {
  return (
    <>
      <div className='row justify-content-evenly bg-primary bg-opacity-10 rounded-3 p-5 mx-0 my-5  h-100'>
        <div className='col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12 p-4'>
          <div className='container-fluid'>
            <h1 className='text-center mb-3'>Nuestros servicios</h1>
          </div>
          <div className='container-fluid my-4'>
            <p>
              Somos una veterinaria comprometida con el bienestar de su mascota.
              Nuestro equipo de veterinarios altamente calificados brinda
              atención personalizada y actualizada. Tratamos a cada paciente con
              amabilidad y respeto, escuchando sus preocupaciones y trabajando
              en colaboración con usted. Su confianza es importante para
              nosotros y nos esforzamos por mantenerla a través de nuestro
              compromiso con la salud y el cuidado de su amado compañero peludo.
            </p>
          </div>
        </div>
        <div className='col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12 my-auto'>
          <div className=' shadow container-fluid bg-light bg-opacity-50 d-flex p-2 justify-content-center rounded-5 my-4 '>
            <img
              className='align-self-center img-fluid mx-3'
              src='/img/veterinarios.png'
              alt=''
              height='50'
              width='50'
            />
            <span className='align-self-center fs-5'>Cita Virtual</span>
          </div>
          <div className=' shadow container-fluid bg-light bg-opacity-50 d-flex p-2 justify-content-center rounded-5 my-4 '>
            <img
              className='align-self-center mx-3 img-fluid'
              src='/img/guarderia.png'
              alt=''
              height='50'
              width='50'
            />
            <span className='align-self-center fs-5'>Guardería</span>
          </div>
          <div className=' shadow container-fluid bg-light bg-opacity-50 d-flex p-2 justify-content-center rounded-5 my-4 '>
            <img
              className='align-self-center mx-3 img-fluid'
              src='/img/banos.png'
              alt=''
              height='50'
              width='50'
            />
            <span className='align-self-center fs-5'>Grooming</span>
          </div>
        </div>
        <div className='col-xl-3 col-lg-4 col-md-12 col-sm-12 col-xs-12 my-auto'>
          <div className=' shadow container-fluid bg-light bg-opacity-50 d-flex p-2 justify-content-center rounded-5 my-4 '>
            <img
              className='align-self-center mx-3 img-fluid'
              src='/img/veterinario.png'
              alt=''
              height='50'
              width='50'
            />
            <span className='align-self-center fs-5'>Cita Presencial</span>
          </div>
          <div className=' shadow container-fluid bg-light bg-opacity-50 d-flex p-2 justify-content-center rounded-5 my-4 '>
            <img
              className='align-self-center mx-3 img-fluid'
              src='/img/sirena.png'
              alt=''
              height='50'
              width='50'
            />
            <span className='align-self-center fs-5'>Urgencias 24/7</span>
          </div>
          <div className=' shadow container-fluid bg-light bg-opacity-50 d-flex p-2 justify-content-center rounded-5 my-4 '>
            <img
              className='align-self-center mx-3 img-fluid'
              src='/img/vacunas.png'
              alt=''
              height='50'
              width='50'
            />
            <span className='align-self-center fs-5'>Vacunaciones</span>
          </div>
        </div>
      </div>
    </>
  )
}
