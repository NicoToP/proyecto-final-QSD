import Jwt from 'jsonwebtoken'
import { SECRET } from '../config/auth.config.js'

export const verifyToken = async (req, res, next) => {
  const token = req.header('auth-token')

  if (!token)
    return res
      .status(401)
      .json({ error: 'No se proporciono ningún token de acceso' })

  try {
    const verified = Jwt.verify(token, SECRET)

    req.user = verified

    next()
  } catch (error) {
    res.status(400).json({ error: 'Token no es valido' })
  }
}

export const isAdmin = async (req, res, next) => {
  const token = req.header('auth-token')

  try {
    const verified = Jwt.verify(token, SECRET)

    if (verified.role !== 'admin')
      return res.status(401).json({ error: 'Requiere rol de administrador' })

    next()
  } catch (error) {
    res.status(400).json({ error: 'Token no es valido' })
  }
}
