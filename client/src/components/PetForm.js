import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { usePets } from '../context/petContext'
import { useNavigate } from 'react-router-dom'

export function PetForm() {
  const { getPet, createPet, updatePet } = usePets()
  const params = useParams()
  const navigate = useNavigate()

  const [pet, setPet] = useState({
    namePet: '',
    species: '',
    breed: '',
    weight: '',
    dateBirth: '',
    description: '',
  })

  useEffect(() => {
    ;(async () => {
      if (params.id) {
        const res = await getPet(params.id)
        setPet(res.data)
      }
    })()
    // eslint-disable-next-line
  }, [params.id])

  return (
    <>
      <Formik
        initialValues={pet}
        validationSchema={Yup.object({
          namePet: Yup.string().required('El Nombre es requerido'),
          species: Yup.string().required('La especie es requerida'),
          breed: Yup.string().required('La raza es requerida'),
          weight: Yup.string().required('Peso requerido'),
          dateBirth: Yup.date().required('Fecha requerida'),
          description: Yup.string(),
        })}
        onSubmit={async (values, actions) => {
          if (params.id) {
            await updatePet(params.id, values)
          } else {
            await createPet(values)
          }
          navigate('/perfil')
        }}
        enableReinitialize
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <div className='container-fluid d-flex justify-content-center mb-3'>
              <h3 className='bg-primary bg-opacity-25 p-3 rounded-3'>
                Añade o Editar una mascota
              </h3>
            </div>
            <div className='row justify-content-center'>
              <div className='col-5'>
                <div className='form-group'>
                  <label>Nombre</label>

                  <Field
                    name='namePet'
                    type='text'
                    id='name-pet'
                    className='form-control'
                    aria-describedby='namePet'
                  />
                  <ErrorMessage
                    name='namePet'
                    component='div'
                    className='form-text text-danger'
                    id='namePet'
                  />
                </div>
              </div>
              <div className='col-5'>
                <div className='form-group'>
                  <label>Especie</label>
                  <Field
                    name='species'
                    type='species'
                    id='species'
                    placeholder='Especie'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='species'
                    component='div'
                    className='form-text text-danger'
                    id='namePet'
                  />
                </div>
              </div>
            </div>
            <div className='row justify-content-center my-3'>
              <div className='col-5'>
                <div className='form-group'>
                  <label>Raza</label>
                  <Field
                    name='breed'
                    type='breed'
                    id='breed'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='breed'
                    component='div'
                    className='form-text text-danger'
                    id='namePet'
                  />
                </div>
              </div>
              <div className='col-5'>
                <div className='form-group'>
                  <label>Peso</label>
                  <Field
                    name='weight'
                    type='number'
                    id='weight'
                    placeholder='Peso'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='weight'
                    component='div'
                    className='form-text text-danger'
                    id='namePet'
                  />
                </div>
              </div>
            </div>
            <div className='row justify-content-center my-3'>
              <div className='col-5'>
                <label htmlFor='inputBirthday' className='form-label mt-0'>
                  Fecha aproximada de nacimiento
                </label>
                <Field
                  name='dateBirth'
                  type='date'
                  id='date-birth'
                  placeholder='Fecha de nacimiento'
                  className='form-control'
                />
                <ErrorMessage
                  name='dateBirth'
                  component='div'
                  className='form-text text-danger'
                  id='namePet'
                />
              </div>
              <div className='col-5'>
                <div className='form-group'>
                  <label>Descripción</label>
                  <Field
                    name='description'
                    component='textarea'
                    placeholder='Description'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='description'
                    component='div'
                    className='form-text text-danger'
                    id='namePet'
                  />
                </div>
              </div>
            </div>
            <div className='d-grid gap-2 col-2 my-4 mx-auto'>
              <button type='submit' className='btn py-2 btn-outline-primary'>
                Enviar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}
