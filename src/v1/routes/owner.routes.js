const express = require('express');
const router = express.Router();

const {
  getAllOwners,
  getOwner,
  createOwner,
  updateOwner,
  removeOwner,
  getAllPets,
  getPet,
  createPet,
  updatePet,
  removePet,
} = require('../../controllers/owner.Controller');

router.get('/', getAllOwners);

router.get('/:ownerId', getOwner);

router.post('/', createOwner);

router.put('/:ownerId', updateOwner);

router.delete('/:ownerId', removeOwner);

router.get('/:ownerId/pets', getAllPets);

router.get('/:ownerId/pets/:petId', getPet);

router.post('/:ownerId/pets', createPet);

router.put('/:ownerId/pets/:petId', updatePet);

router.delete('/:ownerId/pets/:petId', removePet);

module.exports = router;
