const express = require('express');
const router = express.Router();

const {
  renderIndex,
  renderAppointments,
  renderServices,
  renderProducts,
  renderContact,
} = require('../../controllers/render.controller');

router.get('/', renderIndex);

router.get('/appointments', renderAppointments);

router.get('/services', renderServices);

router.get('/products', renderProducts);

router.get('/contact', renderContact);

module.exports = router;
//exporta para usar en otros archivos
