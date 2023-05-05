const express = require('express');
//llama la depencia express
const router = express.Router();
//crea un objeto router para definir la ruta router es un objeto que utilizamos para definir rutas en una aplicación de Express.

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
//aca llamamos a la los controladores en appointment.controller


router.get('/', getAllAppointments);

router.get('/:id', getAppointment);

router.post('/', createAppointment);

router.put('/:id', updateAppointment);

router.delete('/:id', removeAppointment);

router.get('/:id/staff', getStaff);

router.post('/:appointmentId/staffs', createStaff);

router.put('/:appointmentId/staffs/:staffId', updateStaff);

router.delete('/:appointmentId/staffs/:staffId', removeStaff);
//aca se llama cada crud creado en appointment y se asigna si se llama todos o por id 

module.exports = router;
//se exporta la ruta para usar en otra aplicacion
