const Appointment = require('../models/Appointment');

const getAllAppointments = async (req, res) => {
  try {
    const appointment = await Appointment.find().lean();
    return res.status(200).json(appointment);
  } catch (error) {
<<<<<<< HEAD
    return res.status(500).json({message: error.message});
=======
    return res.status(500).json({ message: error.message });
>>>>>>> devNicolas
  }
};

const getAppointment = async (req, res) => {
  try {
<<<<<<< HEAD
    const {id} = req.params;
=======
    const { id } = req.params;
>>>>>>> devNicolas
    const appointment = await Appointment.findById(id).lean();
    if (!appointment) return res.sendStatus(404);
    return res.status(200).json(appointment);
  } catch (error) {
<<<<<<< HEAD
    return res.status(500).json({message: error.message});
=======
    return res.status(500).json({ message: error.message });
>>>>>>> devNicolas
  }
};

const createAppointment = async (req, res) => {
  try {
<<<<<<< HEAD
    const {service, date, description, staff} = req.body;
=======
    const { service, date, description, staff } = req.body;
>>>>>>> devNicolas
    const newAppointment = new Appointment({
      service,
      date,
      description,
      staff,
    });
    await newAppointment.save();
    return res.status(201).json(newAppointment);
  } catch (error) {
<<<<<<< HEAD
    return res.status(500).json({message: error.message});
=======
    return res.status(500).json({ message: error.message });
>>>>>>> devNicolas
  }
};

const updateAppointment = async (req, res) => {
  try {
<<<<<<< HEAD
    const {id} = req.params;
    const {service, date, description, staff} = req.body;
    const updateAppointment = await Appointment.findByIdAndUpdate(
      id,
      {service, date, description, staff},
      {new: true}
=======
    const { id } = req.params;
    const { service, date, description, staff } = req.body;
    const updateAppointment = await Appointment.findByIdAndUpdate(
      id,
      { service, date, description, staff },
      { new: true }
>>>>>>> devNicolas
    );
    if (!updateAppointment) return res.sendStatus(404);
    return res.status(204).json(updateAppointment);
  } catch (error) {
<<<<<<< HEAD
    return res.status(500).json({message: error.message});
=======
    return res.status(500).json({ message: error.message });
>>>>>>> devNicolas
  }
};

const removeAppointment = async (req, res) => {
  try {
<<<<<<< HEAD
    const {id} = req.params;
=======
    const { id } = req.params;
>>>>>>> devNicolas
    const deleteAppointment = await Appointment.findByIdAndRemove(id);

    if (!deleteAppointment) return res.sendStatus(404);
    return res.status(204).json();
  } catch (error) {
<<<<<<< HEAD
    return res.status(500).json({message: error.message});
=======
    return res.status(500).json({ message: error.message });
>>>>>>> devNicolas
  }
};

module.exports = {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  removeAppointment,
};
