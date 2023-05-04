const express = require('express');
const router = express.Router();

const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  removeAppointment,
  getAllStaff,
  updateStaff,
  createStaff,
  removeStaff,
  getStaff,
} = require('../../controllers/appointment.controller');

router.get('/', getAllAppointments);

router.get('/:id', getAppointment);

router.post('/', createAppointment);

router.put('/:id', updateAppointment);

router.delete('/:id', removeAppointment);

router.get('/:id/staff', getStaff);

router.post('/:appointmentId/staffs', createStaff);

router.put('/:appointmentId/staffs/:staffId', updateStaff);

router.delete('/:appointmentId/staffs/:staffId', removeStaff);

module.exports = router;
