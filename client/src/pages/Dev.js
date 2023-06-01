import { useState } from 'react'

import handleRegister from '../services/register.service.js'

export function Dev() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [user, setUser] = useState(null)

  const handleRegister = async (event) => {
    event.preventDefault()
    try {
      const user = await handleRegister.register({
        name: username,
        email,
        password,
      })
      setUser(user)

      setUser('')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log('Error registro', error)
    }
  }

  return (
    <form onSubmit={handleRegister}>
      <div>
        <label>Nombre</label>
        <input
          type='text'
          value={username}
          name='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        <label>Correo</label>
        <input
          type='email'
          value={email}
          name='Email'
          onChange={({ target }) => setEmail(target.value)}
        />
      </div>
      <div>
        <label>Contraseña</label>
        <input
          type='password'
          value={password}
          name='Contraseña'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type='submit'>Registrarse</button>
    </form>
  )
}
