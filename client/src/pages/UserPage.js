import { Profile } from '../components/Profile'
import { AppointmentForm } from '../components/AppointmentForm'
import { RecordUser } from '../components/RecordUser'
import { useState } from 'react'
import { PetForm } from '../components/PetForm'
import { ListPet } from '../components/ListPets'

export function UserPage() {
  const [componentActive, setComponentActive] = useState('')

  const changeComponent = (component) => {
    setComponentActive(component)
  }

  let componentRendered

  const mensaje = () => {
    if (componentActive === '')
      return (
        <h2 className='text-center bg-primary bg-opacity-25 p-3 rounded-3'>
          Selecciona una opción
        </h2>
      )
  }

  switch (componentActive) {
    case 'info':
      componentRendered = <Profile />
      break
    case 'mascotasFormu':
      componentRendered = <PetForm />
      break
    case 'mascotasListado':
      componentRendered = <ListPet />
      break
    case 'historial':
      componentRendered = <RecordUser />
      break
    case 'agendar':
      componentRendered = <AppointmentForm />
      break
    default:
      componentRendered = null
  }

  const dataButton = [
    {
      title: 'Mi info',
      component: 'info',
    },
    {
      title: 'Registro mascotas',
      component: 'mascotasFormu',
    },
    {
      title: 'ver mascotas',
      component: 'mascotasListado',
    },
    {
      title: 'historal',
      component: 'historial',
    },
    {
      title: 'Agendar cita',
      component: 'agendar',
    },
  ]

  return (
    <>
      <div className='row'>
        <div className='col-2 align-self-center mx-auto bg-secondary bg-opacity-10 rounded-3 p-4'>
          <p className='fs-5 text-center fw-bold bg-primary rounded-3 p-2 bg-opacity-25'>
            ¿Qué deseas hacer?
          </p>
          <nav className='nav flex-column justify-content-around'>
            {dataButton.map((button) => (
              <button
                key={button.component}
                onClick={() => changeComponent(`${button.component}`)}
                type='button'
                className='btn btn-outline-primary my-2'
              >
                {button.title}
              </button>
            ))}
          </nav>
        </div>
        <div className='col-8 mx-auto bg-secondary bg-opacity-10 rounded-3 p-4'>
          {mensaje()}
          {componentRendered}
        </div>
      </div>
    </>
  )
}
