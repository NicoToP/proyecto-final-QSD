import { Router } from 'express'

import {
  getAll,
  getOneById,
  createOne,
  updateOneById,
  removeOneById,
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  removeAppointment
} from '../../controllers/pet.controller.js'

const router = Router()

router.get('/', getAll)

router.get('/:id', getOneById)

router.post('/', createOne)

router.put('/:id', updateOneById)

router.delete('/:id', removeOneById)

router.get('/:petId/appointments', getAllAppointments)

router.get('/:petId/appointments/:appointmentId', getAppointment)

router.post('/:petId/appointments', createAppointment)

router.put('/:petId/appointments/:appointmentId', updateAppointment)

router.delete('/:petId/appointments/:appointmentId', removeAppointment)

export default router
