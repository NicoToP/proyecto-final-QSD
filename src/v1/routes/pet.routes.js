const express = require('express');
const router = express.Router();

const {
  getAll,
  getOneById,
  createOne,
  updateOneById,
  removeOneById,
} = require('../../controllers/pet.controller');

router.get('/', getAll);

router.get('/:id', getOneById);

router.post('/', createOne);

router.put('/:id', updateOneById);

router.delete('/:id', removeOneById);

module.exports = router;
