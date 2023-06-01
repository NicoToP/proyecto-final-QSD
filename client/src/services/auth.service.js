import axios from 'axios'

const API_URL = '/api/v1/auth'

const register = (username, email, password) => {
  return axios.post(API_URL + '/register', {
    name: username,
    email,
    password,
  })
}

const login = async (username, password) => {
  return axios
    .post(API_URL + '/signin', {
      name: username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem('user', JSON.stringify(response.data))
      }

      return response.data
    })
}

const logout = () => {
  localStorage.removeItem('user')
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user'))
}

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService
