import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import {
  ADMIN_EMAIL,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
} from '../config/auth.config.js'

export const createAdmin = async () => {
  try {
    // check for an existing admin user
    const userFound = await User.findOne({ email: ADMIN_EMAIL })
    console.log(userFound ? 'Admin ya existente' : 'Creando admin...')

    if (userFound) return

    // hash password
    const password = await bcrypt.hash(ADMIN_PASSWORD, 10)

    // create a new admin user
    const newAdmin = await User.create({
      name: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      password,
      role: 'admin',
    })

    console.log(`Nuevo admin creado:`)
    console.log(`${newAdmin}`)
  } catch (error) {
    console.error(error)
  }
}

createAdmin()
