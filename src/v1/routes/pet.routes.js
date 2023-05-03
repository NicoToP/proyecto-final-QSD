const express = require('express');
const router = express.Router();

const {
  getAll,
  getOneById,
  createOne,
  updateOneById,
  removeOneById,
} = require('../../controllers/pet.controller');

router.get('/', getAll);

router.get('/:id', getOneById);

router.post('/', createOne);

router.put('/:id', updateOneById);

router.delete('/:id', removeOneById);

router.get('/:petId/appointments', getAllAppointments);

router.get('/:petId/appointments/:appointmentId', getAppointment);

router.post('/:petId/appointments', createAppointment);

router.put('/:petId/appointments/:appointmentId', updateAppointment);

router.delete('/:petId/appointments/:appointmentId', removeAppointment);

module.exports = router;