import loginService from '../services/login.service.js'
import { useState } from 'react'

export function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState('')

  const handleLogin = async (event) => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        email,
        password,
      })

      setUser(user)

      setEmail('')
      setPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='col-md-12'>
      <div className='card card-container'>
        <img
          src='/img/favicon.png'
          alt='logo-img'
          className='profile-img-card'
        />

        <form onSubmit={handleLogin}>
          <div className='form-group my-3'>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              value={email}
              className='form-control'
              name='email'
              onChange={({ target }) => setEmail(target.value)}
            />
          </div>

          <div className='form-group my3'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              value={password}
              className='form-control'
              name='password'
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>

          <div className='d-grid gap-2'>
            <button className='btn btn-primary btn-block'>
              <span>Inicia sesión</span>
            </button>
          </div>

          <button style={{ display: 'none' }} />
        </form>
      </div>
    </div>
  )
}
