const Appointment = require('../models/Appointment');

const getAllAppointments = async (req, res) => {
  try {
    const appointment = await Appointment.find().lean();
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const appointment = await Appointment.findById(id).lean();
    if (!appointment) return res.sendStatus(404);
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createAppointment = async (req, res) => {
  try {
    const { service, date, description, staff } = req.body;
    const newAppointment = new Appointment({
      service,
      date,
      description,
      staff,
    });
    await newAppointment.save();
    return res.status(201).json(newAppointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const { service, date, description, staff } = req.body;
    const updateAppointment = await Appointment.findByIdAndUpdate(
      id,
      { service, date, description, staff },
      { new: true }
    );
    if (!updateAppointment) return res.sendStatus(404);
    return res.status(204).json(updateAppointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const removeAppointment = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAppointment = await Appointment.findByIdAndRemove(id);

    if (!deleteAppointment) return res.sendStatus(404);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllAppointments,
  getAppointment,
  createAppointment,
  updateAppointment,
  removeAppointment,
};
