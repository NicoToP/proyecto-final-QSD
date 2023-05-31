import User from '../models/User.js'
import Role from '../models/Role.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { SECRET } from '../config/auth.config.js'

export const registerHandler = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const passwordHash = await bcrypt.hash(password, 8)

    const newUser = new User({
      username,
      email,
      passwordHash,
    })

    const role = await Role.findOne({ name: 'user' })
    newUser.roles = [role._id]

    const savedUser = await newUser.save()

    const token = jwt.sign({ id: savedUser._id }, SECRET, {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
    })

    return res.status(201).json({ token })
  } catch (error) {
    console.error(error)
    return res.status(500).json(error.message)
  }
}

export const loginHandler = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email }).populate('roles')

    const passwordCorrect =
      user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if (!(user && passwordCorrect)) {
      res.status(401).json({ error: 'invalid email or password' })
    }

    const token = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 60 * 60 * 24 * 7, // 7 days
    })

    const authorities = []

    for (let i = 0; i < user.roles.length; i++) {
      authorities.push('ROLE_' + user.roles[i].name.toUpperCase())
    }

    res.status(200).send({
      id: user._id,
      username: user.username,
      email: user.email,
      roles: user.roles,
      authorities,
      accessToken: token,
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json(error.message)
  }
}
