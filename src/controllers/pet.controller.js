const Pet = require('../models/Pet');
const Appointment = require('../models/Appointment');


exports.getAll = async (req, res) => {
  try {
    const pets = await Pet.find().lean();
    return res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.getOneById = async (req, res) => {
  try {
    const {id} = req.params;
    const pet = await Pet.findById(id).lean();
    if (!pet) return res.sendStatus(404);
    return res.status(200).json(pet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.createOne = async (req, res) => {
  try {
    const {name, species, breed, weight, dateBirth, description} = req.body;
    const newPet = new Pet({
      name,
      species,
      breed,
      weight,
      dateBirth,
      description,
    });
    await newPet.save();
    return res.status(201).json(newPet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.updateOneById = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, species, breed, weight, dateBirth, description} = req.body;
    const updatePet = await Pet.findByIdAndUpdate(
      id,
      {name, species, breed, weight, dateBirth, description},
      {new: true}
    );
    if (!updatePet) return res.sendStatus(404);
    return res.status(204).json(updatePet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.removeOneById = async (req, res) => {
  try {
    const {id} = req.params;
    const deletePet = await Pet.findByIdAndRemove(id);

    if (!deletePet) return res.sendStatus(404);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.getAllAppointments = async (req, res) => {
  const { petId } = req.params;
  try {
    const pet = await Pet.findById(petId).populate('appointments');
    if (!pet) return res.status(404);
    return res.status(200).json(pet.appointments);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.getAppointment = async (req, res) => {
  const {petId, appointmentId} = req.params;
  try{
      const pet = await Pet.findById(petId).populate('appointments');
      if(!pet) return res.status(404).json({ error: 'pet not found' });

      const appointment = pet.appointments.find(appointment => appointment._id == appointmentId);
      if(!appointment) return res.status(404).json({ error: 'appointment not found' });

      return res.status(201).json(appointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.createAppointment = async (req, res) => {
  const { petId } = req.params;
  const { service, date, description, staff} = req.body;

  try {
    const pet = await Pet.findById(petId);
    if (!pet) return res.status(404).json({ error: 'pet not found' });

    const appointment = new Appointment({
      service,
      date,
      description,
      staff,
    });

    appointment.pet = pet;

    await appointment.save();
    pet.appointments.push(appointment);

    await pet.save();
    res.status(201).json(appointment);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};



