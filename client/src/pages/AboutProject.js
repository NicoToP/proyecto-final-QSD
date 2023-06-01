import { Link } from 'react-router-dom'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

export function AboutProject() {
  return (
    <>
      <div className='row bg-primary bg-opacity-10 rounded-4 justify-content-evenly m-5 p-3 '>
        <div className='col-md-5 col-sm-12'>
          <h1 className='text-center mt-3'>¿ Cómo nació Vet-Vet ?</h1>

          <div className='container mt-5'>
            <p className='my-3 fs-5'>
              Vet-Vet nace gracias al programa de Quiero Ser Digital, ya que
              este proyecto es la recopilación de todos los conocimientos
              adquiridos durante el Bootcamp de Desarrollo Web enfocado en React
              de BIT.
            </p>
            <p className='my-3 fs-5'>
              Este proyecto va enfocado al campo de la veterinaria, por eso es
              una plataforma que acerca a los dueños de sus mascotas con
              especialistas profesionales para su cuidado. Acá los usuarios
              encontraran información relevante acerca d elos productos que
              están en venta ademas de ver los servicios ofertados en la
              veterinaria. Si el usuario lo decide puede iniciar sesión así
              tendrá un espacio en dodne podrá guardar su información personal,
              registrar sus mascotas, agendar citas y ver el historial de los
              servicios adquiridos con nosotros.
            </p>
          </div>
        </div>
        <div className='col-md-5 col-sm-12 align-self-center'>
          <img
            className='img-fluid mx-auto d-block '
            src='/img/diseno.png'
            alt=''
            height='450'
            width='450'
          />
        </div>
      </div>

      <div className='row  justify-content-evenly'>
        <div className='col-xl-5 col-lg-5 col-md-10 col-sm-12 bg-primary bg-opacity-10 rounded-4 p-5 mt-4'>
          <h3 className='text-center '>~ Sebastian Lean Sánchez ~</h3>
          <img
            className='img-fluid mx-auto my-4 d-block rounded-pill'
            src='/img/SebasBoot.png'
            alt=''
            height='250'
            width='250'
          />

          <p className='text-center m-0 fs-4 fw-bold'>
            Est. Ingeniería en Telecomunicaciones
          </p>
          <p className='text-center fs-5 fw-semibold fst-italic'>
            {' '}
            Desarrollador Full Stack
          </p>
          <p className='my-3 fs-5'>
            Soy un desarrollador React junior con experiencia en proyectos en
            equipo tanto presencial como virtual. Mi formación con Google en
            soporte TI y automatización con Python, sumada a mi Tecnología en
            Sistematización de Datos por la Universidad Distrital y mi
            certificación en desarrollo de software en aplicativos web por la
            Universidad de Caldas, me han proporcionado una sólida base en la
            programación de HTML, CSS (Bootstrap 5), JavaScript, NodeJS,
            MongoDB, Express y React. Además, tengo habilidades para aprender
            rápidamente nuevas tecnologías y habilidades. Mi objetivo es unirme
            a un equipo dinámico y contribuir al éxito de proyectos desafiantes.
          </p>
          <h4>¡Contactanos!</h4>
          <div className='container-fluid d-flex justify-content-center mt-4 '>
            <button type='button' className='btn btn-dark mx-3 fs-4'>
              <Link
                to='https://www.linkedin.com/in/sebastian-leal-sanchez/'
                target='_blank'
                className='text-light text-decoration-none '
              >
                LinkedIn
                <BsLinkedin className='mb-1 mx-2'></BsLinkedin>
              </Link>
            </button>
            <button type='button' className='btn btn-dark'>
              <Link
                to='https://github.com/Sebastian-Leal-S'
                target='_blank'
                className='text-light text-decoration-none fs-4 '
              >
                GitHub
                <BsGithub className='mb-1 mx-2'></BsGithub>
              </Link>
            </button>
          </div>
        </div>
        <div className='col-xl-5 col-lg-5 col-md-10 col-sm-12 bg-primary bg-opacity-10 rounded-4 p-5 mt-4'>
          <h3 className='text-center '>~ Nicolás Torres Pardo ~</h3>
          <img
            className='img-fluid mx-auto my-4 d-block rounded-pill'
            src='/img/NicoBoot.png'
            alt=''
            height='250'
            width='250'
          />

          <p className='text-center m-0 fs-4 fw-bold'>
            Est. Ingeniería en Multimedia
          </p>
          <p className='text-center fs-5 fw-semibold fst-italic'>
            {' '}
            Desarrollador Full Stack
          </p>
          <p className='my-3 fs-5'>
            Soy estudiante de Ingeniería Multimedia con enfoque en desarrollo
            front-end con React y diseño UX/UI. Además con conocimientos en
            tecnologias tales como MongoDB, HTML, CSS, Bootstrap, NodeJS,
            Express, y JavaScript. Mis pasiones incluyen videojuegos,
            fotografía, cine, deportes y viajes. También tengo experiencia en
            modelado 3D, animación 3D, producción y postproducción de video. He
            trabajado en proyectos académicos con diferentes colegas aplicando
            los conocimientos adqueridos y metodologías aprendidas durante mis
            años de estudio para la resolución problemas y creación de productos
            multimedia de alta calidad con diseños sofisticados.
          </p>
          <h4>¡Contactanos!</h4>
          <div className='container-fluid d-flex justify-content-center mt-4 '>
            <button type='button' className='btn btn-dark mx-3 fs-4'>
              <Link
                to='https://www.linkedin.com/in/nico-torrespa/'
                target='_blank'
                className='text-light text-decoration-none '
              >
                LinkedIn
                <BsLinkedin className='mb-1 mx-2'></BsLinkedin>
              </Link>
            </button>
            <button type='button' className='btn btn-dark'>
              <Link
                to='https://github.com/NicoToP'
                target='_blank'
                className='text-light text-decoration-none fs-4 '
              >
                GitHub
                <BsGithub className='mb-1 mx-2'></BsGithub>
              </Link>
            </button>
          </div>

          {/* <div className='row'>
            <div className='col-10'>
              <h5></h5>
            </div>
          </div> */}
        </div>
      </div>
    </>
  )
}
