import { Router } from 'express'
import { getUser, createUser } from '../../controllers/user.controllers.js'
import { isAdmin, verifyToken } from '../../middlewares/authJwt.js'
const userRoutes = Router()

userRoutes.get('/', getUser)

userRoutes.post('/', [verifyToken, isAdmin], createUser)

export default userRoutes
