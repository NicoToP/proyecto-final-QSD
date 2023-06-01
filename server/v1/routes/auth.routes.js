import { Router } from 'express'
import {
  loginHandler,
  registerHandler,
} from '../../controllers/auth.controllers.js'
import {
  checkExistingRole,
  checkExistingUser,
} from '../../middlewares/verityRegister.js'

const authRoutes = Router()

authRoutes.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  )

  next()
})

authRoutes.post(
  '/register',
  [checkExistingUser, checkExistingRole],
  registerHandler
)

authRoutes.post('/login', loginHandler)

export default authRoutes
