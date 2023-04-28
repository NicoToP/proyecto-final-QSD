const express = require('express');
const router = express.Router();

const {render} = require('../controllers/renderController');

const {
  addClient,
  readClient,
  updateClient,
  deleteClient,
} = require('../controllers/ClientController');

router.get('/', render);

router.post('/addClient', addClient);
router.get('/readClient', readClient);
router.put('/updateClient/:id', updateClient);
router.delete('/deleteClient/:id', deleteClient);

module.exports = router;
