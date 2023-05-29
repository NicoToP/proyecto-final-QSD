import { Router } from 'express'
import { verifyToken, isModerator, isAdmin } from '../../middlewares/authJwt.js'
import {
  allAccess,
  userBoard,
  moderatorBoard,
  adminBoard,
} from '../../controllers/user.controller.js'

const router = Router()

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept'
  )
  next()
})

router.get('/all', allAccess)

router.get('/user', [verifyToken], userBoard)

router.get('/mod', [verifyToken, isModerator], moderatorBoard)

router.get('/admin', [verifyToken, isAdmin], adminBoard)

export default router

/* import { Router } from 'express'
import { createUser } from '../controllers/user.controller.js'
import { isAdmin, verifyToken } from '../middlewares/authJwt.js'
import { checkExistingUser } from '../middlewares/verifySignup.js'

const router = Router()

router.post('/', [verifyToken, isAdmin, checkExistingUser], createUser)

export default router */
