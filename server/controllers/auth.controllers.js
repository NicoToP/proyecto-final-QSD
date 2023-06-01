import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config/auth.config.js'

export const register = async (req, res) => {
  const { name, email, password } = req.body

  const salt = bcrypt.genSaltSync(8)
  const passwordHash = await bcrypt.hash(password, salt)

  const user = new User({
    name,
    email,
    password: passwordHash,
  })

  try {
    await user.save()

    res.status(201).json({
      error: null,
    })
  } catch (error) {
    res.status(400).json({ error })
  }
}

export const login = async (req, res) => {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  const passwordCorrect =
    user === null ? false : await bcrypt.compare(password, user.password)

  if (!(user && passwordCorrect)) {
    res.status(401).json({
      error: 'Correo o Contraseña Invalida',
    })
  }

  const token = jwt.sign(
    {
      email: user.email,
      role: user.role,
      id: user._id,
    },
    SECRET,
    {
      expiresIn: 60 * 60 * 24 * 7,
    }
  )

  res.header('auth-token', token).json({
    error: null,
    data: { token },
  })
}
