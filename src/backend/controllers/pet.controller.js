//se controla el crud de mascotas con consultas desde mascotas y tambien de cita a traves de mascotas 

const Pet = require('../models/Pet');
const Appointment = require('../models/Appointment');
//se declara la varible pet y se llama a la carpeta models lo cual tiene adentro pet
//y tambien de cita 

//llama todos los datos de pet 

exports.getAll = async (req, res) => {
  try {
    const pets = await Pet.find().lean();
    return res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

  //obtiene el id de pet 
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

//se crea nuevo pet con los parametros 
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

  //actualiza la informacion del pet 
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

  //se elimina la mascota
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
//se obtiene todas  las citas a traves del pet id
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

//se obtiene una cita a traves del id pet 
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
//se crea una cita a traves del pet id 
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
//se actualiza la la cita a traves del id pet
exports.updateAppointment = async (req, res) => {
  const {petId, appointmentId} = req.params;
  const {service, date, description, staff} = req.body;
  try {
    const pet = await Pet.findById(petId).populate('appointments');
    if (!pet) return res.status(404).json({error: 'pet not found'});

    const appointment = pet.appointments.find(appointment => appointment._id == appointmentId);
    if (!appointment) return res.status(404).json({error: 'appointment not found'});

    appointment.service= service || appointment.service;
    appointment.date = date || appointment.date;
    appointment.description = description || appointment.description;
    appointment.staff = staff|| appointment.staff;

    await appointment.save();

    return res.status(200).json(appointment);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

//se elimina la cita a atraves del id pet 
exports.removeAppointment = async (req, res) => {
  const {petId, appointmentId} = req.params;
  try {
    const pet = await Pet.findById(petId).populate('appointments');
    if (!pet) return res.status(404).json({error: 'pet not found'});

    const appointment = pet.appointments.find(appointment => appointment._id == appointmentId);
    if (!appointment) return res.status(404).json({error: 'appointment not found'});

    await Appointment.deleteOne({_id: appointment._id});
    pet.appointments.pull(appointment);

    await pet.save();
    return res.status(204).json(appointment);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};