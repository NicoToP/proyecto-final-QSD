//estamos definiendo el CRUD para la database

/* se esta importando el modelo de Dueño(owner) difinido en owner.js
en la carpeta models esta sintaxis se usa par importar modulos */
const Owner = require('../models/Owner');
const Pet = require('../models/Pet');

exports.getAllOwners = async (req, res) => {
  try {
    const owners = await Owner.find().lean();
    return res.status(200).json(owners);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.getOwner = async (req, res) => {
  const {ownerId} = req.params;

  try {
    const owner = await Owner.findById(ownerId).lean();
    if (!owner) return res.sendStatus(404);
    return res.status(200).json(owner);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.createOwner = async (req, res) => {
  const {name, email, phone} = req.body;

  try {
    const newOwner = new Owner({
      name,
      email,
      phone,
    });
    await newOwner.save();
    return res.status(201).json(newOwner);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.updateOwner = async (req, res) => {
  const {ownerId} = req.params;
  const {name, email, phone} = req.body;

  try {
    const updateOwner = await Owner.findByIdAndUpdate(
      ownerId,
      {
        name,
        email,
        phone,
      },
      {new: true}
    );

    return res.status(204).json(updateOwner);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.removeOwner = async (req, res) => {
  const {ownerId} = req.params;
  try {
    const deleteOwner = await Owner.findByIdAndDelete(ownerId);

    if (!deleteOwner) return res.sendStatus(404);

    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.getAllPets = async (req, res) => {
  const {ownerId} = req.params;
  try {
    const owner = await Owner.findById(ownerId).populate('pets');
    if (!owner) return res.status(404);
    return res.status(200).json(owner.pets);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.getPet = async (req, res) => {
  const {ownerId, petId} = req.params;
  try {
    const owner = await Owner.findById(ownerId).populate('pets');
    if (!owner) return res.status(404).json({error: 'owner not found'});

    const pet = owner.pets.find(pet => pet._id == petId);
    if (!pet) return res.status(404).json({error: 'pet not found'});

    return res.status(201).json(pet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.createPet = async (req, res) => {
  const {ownerId} = req.params;
  const {name, species, breed, weight, dateBirth, description} = req.body;

  try {
    const owner = await Owner.findById(ownerId);
    if (!owner) return res.status(404).json({error: 'owner not found'});

    const pet = new Pet({
      name,
      species,
      breed,
      weight,
      dateBirth,
      description,
    });
    pet.owner = owner;

    await pet.save();
    owner.pets.push(pet);

    await owner.save();
    res.status(201).json(pet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.updatePet = async (req, res) => {
  const {ownerId, petId} = req.params;
  const {name, species, breed, weight, dateBirth, description} = req.body;
  try {
    const owner = await Owner.findById(ownerId).populate('pets');
    if (!owner) return res.status(404).json({error: 'owner not found'});

    const pet = owner.pets.find(pet => pet._id == petId);
    if (!pet) return res.status(404).json({error: 'pet not found'});

    pet.name = name || pet.name;
    pet.species = species || pet.species;
    pet.breed = breed || pet.breed;
    pet.weight = weight || pet.weight;
    pet.dateBirth = dateBirth || pet.dateBirth;
    pet.description = description || pet.description;

    await pet.save();

    return res.status(200).json(pet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

exports.removePet = async (req, res) => {
  const {ownerId, petId} = req.params;
  try {
    const owner = await Owner.findById(ownerId).populate('pets');
    if (!owner) return res.status(404).json({error: 'owner not found'});

    const pet = owner.pets.find(pet => pet._id == petId);
    if (!pet) return res.status(404).json({error: 'pet not found'});

    await Pet.deleteOne({_id: pet._id});
    owner.pets.pull(pet);

    await owner.save();
    return res.status(204).json(pet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};
