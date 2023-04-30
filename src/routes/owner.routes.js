const express = require('express');
const router = express.Router();

// import of all controllers
const {
  getAllOwners,
  getOwnerById,
  createOwner,
  updateOwnerById,
  removeOwnerById,
} = require('../controllers/owner.controller');

// route to get all owners
router.get('/owner', getAllOwners);

// route to get one owner
router.get('/owner/:id', getOwnerById);

// route to create new owner
router.post('/owner', createOwner);

// route to update an owner
router.put('/owner/:id', updateOwnerById);

// route to update/add new pet
/* router.patch('/:id', add); */

// route to delete an owner
router.delete('/owner/:id', removeOwnerById);

module.exports = router;
