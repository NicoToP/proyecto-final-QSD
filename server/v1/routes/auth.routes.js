import { Router } from 'express'
import {
  signinHandler,
  signupHandler,
} from '../../controllers/auth.controller.js'
import {
  checkExistignRole,
  checkExistignuser,
} from '../../middlewares/verifySignup.js'

const router = Router()

router.use((req, res, next) => {
  res.header(
    'Access-Control-Allow-Header',
    'x-access-token, Origin, Content-Type, Accept'
  )
})
