import {Router} from 'express';

import {
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
} from '../../controllers/owner.controller.js';

const router = Router();

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

export default router;
