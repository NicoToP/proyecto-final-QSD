const express = require('express');
const router = express.Router();

const {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  removeAppointment,
} = require('../../controllers/appointment.controller');

router.get('/', getAllAppointments);

router.get('/:id', getAppointment);

router.post('/', createAppointment);

router.put('/:id', updateAppointment);

router.delete('/:id', removeAppointment);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> devNicolas
