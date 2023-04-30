const express = require('express');
const router = express.Router();

const {
  getAllStaff,
  getStaffById,
  createStaff,
  updateStaffById,
  removeStaffById,
} = require('../controllers/staff.controller');

router.get('/staff', getAllStaff);

router.get('/staff/:id', getStaffById);

router.post('/staff', createStaff);

router.put('/staff/:id', updateStaffById);

router.delete('/staff/:id', removeStaffById);

module.exports = router;
