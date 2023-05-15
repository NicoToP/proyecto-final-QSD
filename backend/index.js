const express = require('express');
const morgan = require('morgan');
const path = require('path');

const app = express();
const __dirnameDeploy = path.dirname(__filename);

require('dotenv').config();

require('./database/database');

// settings
app.set('PORT', process.env.PORT || 4000);

// middlewares
app.use(morgan('dev')); // para registro de solicitudes en formato 'dev'
app.use(express.json()); // para manejo de datos en formato JSON
app.use(express.urlencoded({extended: false})); // para manejo de datos en formato de URL codificada

// archivos estaticos
app.use(express.static(path.join(__dirnameDeploy, '../frontend/build')));

// routes
app.use('/api/v1/owners', require('./v1/routes/owner.routes'));
app.use('/api/v1/pets', require('./v1/routes/pet.routes'));
app.use('/api/v1/appointments', require('./v1/routes/appointment.routes'));
app.use('/api/v1/staffs', require('./v1/routes/staff.routes'));

// starting
app.listen(app.get('PORT'), () => {
  console.log(`Server on port ${app.get('PORT')}`);
});
