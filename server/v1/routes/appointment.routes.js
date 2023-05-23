import { Router } from 'express'

import {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  removeAppointment,
  getStaff,
  updateStaff,
  createStaff,
  removeStaff
} from '../../controllers/appointment.controller.js'

const router = Router()

router.get('/', getAllAppointments)

router.get('/:id', getAppointment)

router.post('/', createAppointment)

router.put('/:id', updateAppointment)

router.delete('/:id', removeAppointment)

router.get('/:id/staff', getStaff)

router.post('/:appointmentId/staffs', createStaff)

router.put('/:appointmentId/staffs/:staffId', updateStaff)

router.delete('/:appointmentId/staffs/:staffId', removeStaff)

export default router
