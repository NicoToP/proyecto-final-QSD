/* import React, { useState, useRef } from 'react' */
/* import Form from 'react-validation/build/form'
import Input from 'react-validation/build/input'
import CheckButton from 'react-validation/build/button'
import { isEmail } from 'validator' */

/* import AuthService from '../services/auth.service' */

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

/* const required = (value) => {
  if (!value) {
    return (
      <div className='alert alert-danger' role='alert'>
        This field is required!
      </div>
    )
  }
}

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className='alert alert-danger' role='alert'>
        This is not a valid email.
      </div>
    )
  }
}

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className='alert alert-danger' role='alert'>
        The username must be between 3 and 20 characters.
      </div>
    )
  }
}

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className='alert alert-danger' role='alert'>
        The password must be between 6 and 40 characters.
      </div>
    )
  }
} */

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Muy corto')
    .max(30, 'Muy largo')
    .required('Es requerido'),
  email: Yup.string().email('Correo invalido').required('Es requerido'),
  password: Yup.string()
    .min(12, 'Minino 12 caracteres')
    .max(30, 'Máximo 30 caracteres')
    .required('Es requerido'),
})

const Register = () => {
  /* const form = useRef()
  const checkBtn = useRef() */

  /* const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [successful, setSuccessful] = useState(false)
  const [message, setMessage] = useState('') */

  /* const onChangeUsername = (e) => {
    const username = e.target.value
    setUsername(username)
  }

  const onChangeEmail = (e) => {
    const email = e.target.value
    setEmail(email)
  }

  const onChangePassword = (e) => {
    const password = e.target.value
    setPassword(password)
  } */

  /* const handleRegister = (e) => {
    e.preventDefault()

    setMessage('')
    setSuccessful(false)

    form.current.validateAll()

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message)
          setSuccessful(true)
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()

          setMessage(resMessage)
          setSuccessful(false)
        }
      )
    }
  } */

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <img
          src='//ssl.gstatic.com/accounts/ui/avatar_2x.png'
          alt='profile-img'
          className='profile-img-card'
        />

        <Formik
          validationSchema={registerSchema} /* onSubmit={handleRegister} */
        >
          {({ handleSubmit }) => {
            ;<Form onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor='username'>Nombre de usuario</label>
                <Field
                  name='username'
                  type='text'
                  id='user-name'
                  placeholder='Nombre de usuario'
                  className='form-control'
                ></Field>
                <ErrorMessage
                  name='username'
                  id='user-name'
                  component='div'
                  className='form-text text-danger'
                ></ErrorMessage>
              </div>
            </Form>
          }}
        </Formik>

        {/* <Form onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className='form-group'>
                <label htmlFor='username'>Username</label>
                <input
                  type='text'
                  className='form-control'
                  name='username'
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input
                  type='text'
                  className='form-control'
                  name='email'
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  className='form-control'
                  name='password'
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>

              <div className='form-group'>
                <button className='btn btn-primary btn-block'>Sign Up</button>
              </div>
            </div>
          )}

          {message && (
            <div className='form-group'>
              <div
                className={
                  successful ? 'alert alert-success' : 'alert alert-danger'
                }
                role='alert'
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: 'none' }} ref={checkBtn} />
          <button style={{ display: 'none' }} ref={checkBtn} />
        </Form> */}
      </div>
    </div>
  )
}

export default Register
