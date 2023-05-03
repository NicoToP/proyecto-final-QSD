const Staff = require('../models/Staff');

const getAllStaffs = async (req, res) => {
  try {
    const staff = await Staff.find().lean();
    return res.status(200).json(staff);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const getStaff = async (req, res) => {
  try {
    const {id} = req.params;
    const staff = await Staff.findById(id).lean();
    if (!staff) return res.sendStatus(404);
    return res.status(200).json(staff);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const createStaff = async (req, res) => {
  try {
    const {name, specialty, professionalCard, email, phone} = req.body;
    const newStaff = new Staff({
      name,
      specialty,
      professionalCard,
      email,
      phone,
    });
    await newStaff.save();
    return res.status(201).json(newStaff);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const updateStaff = async (req, res) => {
  try {
    const {id} = req.params;
    const {name, specialty, professionalCard, email, phone} = req.body;
    const updateStaff = await Staff.findByIdAndUpdate(
      id,
      {name, specialty, professionalCard, email, phone},
      {new: true}
    );
    if (!updateStaff) return res.sendStatus(404);
    return res.status(204).json(updateStaff);
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

const removeStaff = async (req, res) => {
  try {
    const {id} = req.params;
    const deleteStaff = await Staff.findByIdAndRemove(id);

    if (!deleteStaff) return res.sendStatus(404);
    return res.status(204).json();
  } catch (error) {
    return res.status(500).json({message: error.message});
  }
};

module.exports = {
  getAllStaffs,
  getStaff,
  createStaff,
  updateStaff,
  removeStaff,
};