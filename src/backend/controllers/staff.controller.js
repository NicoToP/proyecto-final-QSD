const Staff = require('../models/Staff');
//se declara la variable staff y se llama lo que se encuentra de staff en la carpeta models

//se obtiene todos los datos del staff 
const getAllStaffs = async (req, res) => {
    try {
      const staff = await Staff.find().lean();
      return res.status(200).json(staff);
    } catch (error) {
      return res.status(500).json({message: error.message});
    }
  };

  //se obtiene a el staff a traves del id
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
  
//se crea el staff con los parametros 
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

  //se actualiza el staff segun los parametros 
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

  //se elimina el staff 
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

//se exporta el crud para usarlo en otras carpetas
  module.exports = {
  getAllStaffs,
  getStaff,
  createStaff,
  updateStaff,
  removeStaff,
};