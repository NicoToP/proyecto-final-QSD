const Appointment = require('../models/Appointment');
const Staff = require('../models/Staff');

exports.getAllAppointments = async (req, res) => {
  try {
    const appointment = await Appointment.find().lean();
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.getAppointment = async (req, res) => {
  try {
    const {id} = req.params;
    const appointment = await Appointment.findById(id).lean();
    if (!appointment) return res.sendStatus(404);
    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.createAppointment = async (req, res) => {
  try {
    const {service, date, description, staff} = req.body;
    const newAppointment = new Appointment({
      service,
      date,
      description,
      staff,
    });
    await newAppointment.save();
    return res.status(201).json(newAppointment);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.updateAppointment = async (req, res) => {
  try {
    const {id} = req.params;
    const {service, date, description, staff} = req.body;
    const updateAppointment = await Appointment.findByIdAndUpdate(
      id,
      {service, date, description, staff},
      {new: true}
    );
    if (!updateAppointment) return res.sendStatus(404);
    return res.status(204).json(updateAppointment);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.removeAppointment = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteAppointment = await Appointment.findByIdAndRemove(id);

    if (!deleteAppointment) return res.sendStatus(404);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.getStaff = async (req, res) => {
  const {appointmentId} = req.params;
  
  try {
    const appointment = await Appointment.findById(appointmentId).populate('staffs'); 
    if(!appointment) return res.status(404).json({error: 'appointment not found'});
    return res.status(204).json(appointment.staff);
  } catch (error){
    return res.status(500).json({message: error.message});
  }
};

exports.createStaff = async (req, res) => {
  const {appointmentId} = req.params;
  const {name, specialty, professionalCard, email, phone} = req.body;

  try {
    const appointment = await Appointment.findById(appointmentId);
    if (!appointment) return res.status(404).json({error: 'appointment not found'});

    const staff = new Staff({
      name,
      specialty,
      professionalCard,
      email,
      phone,
    });
    staff.appointment = appointment;

    await staff.save();
    appointment.staff.push(staff);

    await appointment.save();
    res.status(201).json(pet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.updateStaff = async (req, res) => {
  const {appointmentId, staffId} = req.params;
  const {name, specialty, professionalCard, email, phone} = req.body;
  try {
    const appointment = await Appointment.findById(appointmentId).populate('staffs');
    if (!appointment) return res.status(404).json({error: 'appointment not found'});

    const staff = appointment.staff.find(staff => staff._id == staffId);
    if (!staff) return res.status(404).json({error: 'staff not found'});

    staff.name = name || staff.name;
    staff.specialty = specialty || staff.specialty;
    staff.professionalCard = professionalCard || staff.professionalCard;
    staff.email = email || staff.email;
    staff.phone = phone || staff.phone;
    
    await staff.save();

    return res.status(200).json(staff);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.removeStaff = async (req, res) => {
  const {appointmentId, staffId} = req.params;
  try {
    const appointment = await Appointment.findById(appointmentId).populate('staffs');
    if (!appointment) return res.status(404).json({error: 'appointment not found'});

    const staff = appointment.staff.find(staff => staff._id == staffId);
    if (!staff) return res.status(404).json({error: 'staff not found'});

    await Staff.deleteOne({_id: staff._id});
    appointment.staff.pull(staff);

    await appointment.save();
    return res.status(204).json(staff);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};