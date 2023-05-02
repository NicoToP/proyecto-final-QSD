const Pet = require('../models/Pet');

const getAll = async (req, res) => {
  try {
    const pets = await Pet.find().lean();
    return res.status(200).json(pets);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getOneById = async (req, res) => {
  try {
    const {id} = req.params;
    const pet = await Pet.findById(id).lean();
    if (!pet) return res.sendStatus(404);
    return res.status(200).json(pet);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const createOne = async (req, res) => {
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

const updateOneById = async (req, res) => {
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

const removeOneById = async (req, res) => {
  try {
    const {id} = req.params;
    const deletePet = await Pet.findByIdAndRemove(id);

    if (!deletePet) return res.sendStatus(404);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  getAll,
  getOneById,
  createOne,
  updateOneById,
  removeOneById,
};
