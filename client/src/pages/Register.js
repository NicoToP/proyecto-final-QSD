import registerService from '../services/register.service.js'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export function Register() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)
  console.log(user)

  const handleRegister = async (event) => {
    event.preventDefault()

    try {
      const user = await registerService.register({
        name,
        email,
        password,
      })

      setUser(user)

      setUser('')
      setEmail('')
      setPassword('')

      if (user) {
        navigate('/login')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <img
          src='/img/favicon.png'
          alt='profile-img'
          className='profile-img-card'
        />

        <form onSubmit={handleRegister}>
          <div className='form-group my-3'>
            <label>Nombre</label>
            <input
              type='text'
              value={name}
              name='Username'
              className='form-control'
              onChange={({ target }) => setName(target.value)}
            />
          </div>

          <div className='form-group my-3'>
            <label>Correo</label>
            <input
              type='email'
              value={email}
              name='Email'
              className='form-control'
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <div className='form-group my-3'>
            <label>Contraseña</label>
            <input
              type='password'
              value={password}
              name='Contraseña'
              className='form-control'
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>

          <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-primary'>
              Registrarse
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
