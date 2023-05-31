import React from 'react'
/* import AuthService from '../services/auth.service' */

const Profile = () => {
  /* const currentUser = AuthService.getCurrentUser() */

  return (
    <>
      <div className='container-fluid d-flex justify-content-center mb-2'>
        <h3 className='bg-primary bg-opacity-25 p-3 rounded-3'>Mis datos</h3>
      </div>
      <div className='row justify-content-center'>
        <div className='col-6'>
          <form className='container'>
            <input
              type='text'
              className='form-control my-3'
              placeholder='Nombre'
            />
            <input
              type='text'
              className='form-control my-3'
              placeholder='Correo'
            />
            <input
              type='password'
              className='form-control my-3'
              placeholder='clave'
            />
            <input
              type='text'
              className='form-control my-3'
              placeholder='dirección'
            />
          </form>
        </div>
      </div>
      <div className='row justify-content-center'>
        <div className='col-2'>
          <button type='button' class='btn btn-outline-warning'>
            Editar
          </button>
        </div>
        <div className='col-2'>
          <button type='button' class='btn btn-outline-success'>
            Guardar
          </button>
        </div>
      </div>
    </>
  )
}

export default Profile
