import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useAppointment } from '../context/AppointmentsContext'
import { usePets } from '../context/petContext'

export function AppointmentForm() {
  const { pets } = usePets()
  const { getAppointment, createAppointment, updateAppointment } =
    useAppointment()
  const params = useParams()
  const [appointment, setAppointment] = useState({})

  useEffect(() => {
    ;(async () => {
      if (params.id) {
        const res = await getAppointment(params.id)
        setAppointment(res.data)
      }
    })()
    // eslint-disable-next-line
  }, [params.id])

  return (
    <>
      <Formik
        initialValues={appointment}
        validationSchema={Yup.object({
          /* namePet: Yup.string().required('El Nombre es requerido'), */
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updateAppointment(params.id, values)
          } else {
            await createAppointment(values)
          }
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='container-fluid d-flex justify-content-center mb-3'>
              <h3 className='bg-primary bg-opacity-25 p-3 rounded-3'>
                Agenda tu cita
              </h3>
            </div>
            <div className='row'>
              <div className='col'>
                <div className='form-outline'>
                  <label className='form-label' for='form8Example2'>
                    Nombre de tu peludito
                  </label>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                  >
                    <option selected>Selecciona tu mascota</option>
                    {pets.map((pet) => (
                      <option value={pet._id}>{pet.namePet}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className='col'>
                <div className='form-outline'>
                  <label className='form-label' for='form8Example2'>
                    ¿Qué agendamos hoy?
                  </label>
                  <select
                    className='form-select'
                    aria-label='Default select example'
                  >
                    <option selected>Selecciona tu cita</option>
                    <option value='Bano'>Baño</option>
                    <option value='Guarderia'>Guardería</option>
                    <option value='Peluqueria'>Peluqueria</option>
                    <option value='Consulta virtual'>Consulta Vitual</option>
                    <option value='Consulta presencial'>
                      Consulta presencial
                    </option>
                  </select>
                </div>
              </div>
              <div className='col'>
                <div className='form-outline'>
                  <label className='form-label' for='form8Example5'>
                    ¿Cuál día es perfecto para ti?
                  </label>
                  <input
                    type='date'
                    id='form8Example5'
                    className='form-control'
                  />
                </div>
              </div>
            </div>

            <hr />

            <div className='row justify-content-center'>
              <div className='col-6'>
                <div className='form-outline'>
                  <label
                    for='exampleFormControlTextarea1'
                    className='form-label'
                  >
                    ¿Deseas contarnos algo extra?
                  </label>
                  <textarea
                    className='form-control'
                    id='exampleFormControlTextarea1'
                    rows='2'
                  ></textarea>
                </div>
              </div>
            </div>
            <div class='d-grid gap-2 col-2 my-4 mx-auto'>
              <button class='btn py-2 btn-outline-success' type='submit'>
                ¡Agendar!
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
