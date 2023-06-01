import { Router } from 'express'
import { register, login } from '../../controllers/auth.controllers.js'

import {
  checkExistingUser,
  checkSchemaRegister,
} from '../../middlewares/verityRegister.js'

import { checkSchemaLogin } from '../../middlewares/verityLogin.js'

const authRoutes = Router()

authRoutes.post('/register', [checkExistingUser, checkSchemaRegister], register)

authRoutes.post('/login', [checkSchemaLogin], login)

export default authRoutes
