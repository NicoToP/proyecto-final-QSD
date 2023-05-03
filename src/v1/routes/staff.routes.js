const express = require('express');
const router = express.Router();

const {
  getAllStaffs,
  getStaff,
  createStaff,
  updateStaff,
  removeStaff,
} = require('../../controllers/staff.controller');

router.get('/', getAllStaffs);

router.get('/:id', getStaff);

router.post('/', createStaff);

router.put('/:id', updateStaff);

router.delete('/:id', removeStaff);

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> devNicolas
