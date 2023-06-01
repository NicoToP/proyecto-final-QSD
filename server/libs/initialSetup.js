import Role from '../models/Role.js'
import User from '../models/User.js'
import bcrypt from 'bcryptjs'
import {
  ADMIN_EMAIL,
  ADMIN_USERNAME,
  ADMIN_PASSWORD,
} from '../config/auth.config.js'

export const createRoles = async () => {
  try {
    // Count Documents
    const count = await Role.estimatedDocumentCount()

    // check for existing roles
    if (count > 0) return

    // Create default Roles
    const values = await Promise.all([
      new Role({ name: 'user' }).save(),
      new Role({ name: 'moderator' }).save(),
      new Role({ name: 'admin' }).save(),
    ])

    console.log(values)
  } catch (error) {
    console.error(error)
  }
}

export const createAdmin = async () => {
  try {
    // check for an existing admin user
    const userFound = await User.findOne({ email: ADMIN_EMAIL })
    console.log(userFound ? 'Admin existente' : 'Admin sin registrar')

    if (userFound) return

    // get roles _id
    const roles = await Role.find({ name: { $in: ['admin', 'moderator'] } })

    //
    const passwordHash = await bcrypt.hash(ADMIN_PASSWORD, 10)

    // create a new admin user
    const newAdmin = await User.create({
      username: ADMIN_USERNAME,
      email: ADMIN_EMAIL,
      passwordHash,
      roles: roles.map((role) => role._id),
    })

    console.log(`new user created: ${newAdmin.username}`)
    console.log(`new user created: ${newAdmin.email}`)
  } catch (error) {
    console.error(error)
  }
}

createRoles()
createAdmin()
