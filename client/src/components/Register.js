import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

import AuthService from '../services/auth.service'

const Register = () => {
  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <img
          src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
          alt='profile-img'
          className='profile-img-card'
        />

        <Formik
          validationSchema={Yup.object({
            username: Yup.string()
              .min(3, 'Muy corto')
              .max(30, 'Muy largo')
              .required('Es requerido'),
            email: Yup.string()
              .email('Correo invalido')
              .required('Es requerido'),
            password: Yup.string()
              .min(12, 'Minino 12 caracteres')
              .max(30, 'Máximo 30 caracteres')
              .required('Es requerido'),
          })}
          onSubmit={async (values, actions) => {
            await AuthService.register(values)
          }}
        >
          {({ handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <div className='my-3'>
                <div className='form-group'>
                  <label htmlFor='username'>Nombre de usuario</label>
                  <Field
                    name='username'
                    type='text'
                    id='user-name'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='username'
                    component='div'
                    className='form-text text-danger'
                    id='user-name'
                  />
                </div>
              </div>

              <div className='my-3'>
                <div className='form-group'>
                  <label htmlFor='username'>Correo</label>
                  <Field
                    name='email'
                    type='text'
                    id='email'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='email'
                    component='div'
                    className='form-text text-danger'
                    id='email'
                  />
                </div>
              </div>
              <div className='my-3'>
                <div className='form-group'>
                  <label htmlFor='username'>Contraseña</label>
                  <Field
                    name='password'
                    type='text'
                    id='password'
                    placeholder='Contraseña'
                    className='form-control'
                  />
                  <ErrorMessage
                    name='password'
                    component='div'
                    className='form-text text-danger'
                    id='password'
                  />
                </div>
              </div>
              <div className='d-grid gap-2'>
                <button type='submit' className='btn btn-primary'>
                  Registrar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Register
