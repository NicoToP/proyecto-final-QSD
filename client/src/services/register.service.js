import axios from 'axios'

const baseUrl = '/api/v1/auth/register/'

const register = async (datos) => {
  const { data } = await axios.post(baseUrl, datos)
  return data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { register }
