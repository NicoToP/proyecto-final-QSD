import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import AuthService from '../services/auth.service'

export function Navbar() {
  const location = useLocation()

  const [showModeratorBoard, setShowModeratorBoard] = useState(false)
  const [showAdminBoard, setShowAdminBoard] = useState(false)
  const [currentUser, setCurrentUser] = useState(undefined)

  useEffect(() => {
    const user = AuthService.getCurrentUser()

    if (user) {
      setCurrentUser(user)
      setShowModeratorBoard(user.roles.includes('ROLE_MODERATOR'))
      setShowAdminBoard(user.roles.includes('ROLE_ADMIN'))
    }
  }, [])

  const logOut = () => {
    AuthService.logout()
  }

  const menuData = [
    {
      path: '/',
      name: 'Home',
    },
    {
      path: '/appointments',
      name: 'Citas médicas',
    },
    {
      path: '/services',
      name: 'Servicios',
    },
    {
      path: '/products',
      name: 'Productos',
    },
    {
      path: '/contact',
      name: 'Contactanos',
    },
  ]

  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-primary bg-gradient mb-5'>
      <div className='container-fluid p-2'>
        <Link className='navbar-brand fs-2 mx-4' to='/'>
          <img
            src='/img/logo.png'
            alt='Logo'
            width='50'
            height='50'
            className='d-inline-block align-text-center mx-2'
          />
          Vet-Vet
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          {showModeratorBoard && (
            <li className='nav-item'>
              <Link to={'/mod'} className='nav-link'>
                Moderator Board
              </Link>
            </li>
          )}

          {showAdminBoard && (
            <li className='nav-item'>
              <Link to={'/admin'} className='nav-link'>
                Admin Board
              </Link>
            </li>
          )}

          {currentUser && (
            <li className='nav-item'>
              <Link to={'/user'} className='nav-link'>
                User
              </Link>
            </li>
          )}
          <ul className='navbar-nav ms-auto me-auto'>
            {menuData.map((item) => (
              <li
                key={item.name}
                className={`nav-item fs-5 mx-3 ${
                  location.pathname === item.path ? 'active' : ''
                }`}
              >
                <Link to={item.path} className='nav-link'>
                  <div className='list-item'>{item.name}</div>
                </Link>
              </li>
            ))}
          </ul>
          <div className='ms-auto me-auto'>
            {currentUser ? (
              <div className='navbar-nav'>
                <li className='nav-item'>
                  <Link to={'/profile'} className='nav-link'>
                    {currentUser.username}
                  </Link>
                </li>
                <li className='nav-item'>
                  <a href='/login' className='nav-link' onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className='navbar-nav'>
                <li className='nav-item'>
                  <Link
                    to={'/login'}
                    className='nav-link btn btn-outline-light'
                  >
                    Login
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link
                    to={'/register'}
                    className='nav-link btn btn-outline-light'
                  >
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
