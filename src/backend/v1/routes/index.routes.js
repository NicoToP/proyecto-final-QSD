const express = require('express');
////llama la depencia express
const router = express.Router();
//crea un objeto router para definir la ruta router es un objeto que utilizamos para definir rutas en una aplicación de Express.

const {renderIndex} = require('../../controllers/render.controller');
//se importa la funcion controlador para renderizar vistas y templates para la aplicacion

/* const {
  addClient,
  readClient,
  updateClient,
  deleteClient,
} = require('../../controllers/ClientController');
//aca de llamamos  el crud dentro del client controller  */

router.get('/', renderIndex);
//desde la raiz con el objeto router de express se le asigna como controlador la funcion render que ha sido importada previamente desde el modulo render controller 

/* router.post('/addClient', addClient);
router.get('/readClient', readClient);
router.put('/updateClient/:id', updateClient);
router.delete('/deleteClient/:id', deleteClient);
//se llama los controladores de la raiz de crud de cliente  */

module.exports = router;
//exporta para usar en otros archivos
