const Owner = require('../models/Owner');

const getAllOwners = async (req, res) => {
  try {
    const owner = await Owner.find().lean();
    return res.status(200).json(owner);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getOwnerById = async (req, res) => {
  try {
    const {id} = req.params;
    const owner = await Owner.findById(id).lean();
    if (!owner) return res.sendStatus(404);
    return res.status(200).json(owner);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const createOwner = async (req, res) => {
  try {
    const newOwner = new Owner({
      name: {
        first: req.body.first,
        last: req.body.last,
      },
      email: req.body.email,
      phone: req.body.phone,
    });
    await newOwner.save();
    return res.status(201).json(newOwner);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const updateOwnerById = async (req, res) => {
  try {
    const {id} = req.params;
    const updateOwner = await Owner.findByIdAndUpdate(id, {
      name: {
        first: req.body.first,
        last: req.body.last,
      },
      email: req.body.email,
      phone: req.body.phone,
    });

    return res.status(204).json(updateOwner);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const removeOwnerById = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteOwner = await Owner.findByIdAndDelete(id);

    if (!deleteOwner) return res.sendStatus(404);
    return res.status(204).json();
  } catch (error) {
    res.send('Error al eliminar Ownere');
    console.error(error);
  }
};

module.exports = {
  getAllOwners,
  getOwnerById,
  createOwner,
  updateOwnerById,
  removeOwnerById,
};
