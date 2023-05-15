import express from 'express';
import morgan from 'morgan';
import path from 'path';
import {dirname} from 'path';
import {fileURLToPath} from 'url';

import ownerRoutes from './v1/routes/owner.routes.js';
import petRoutes from './v1/routes/pet.routes.js';
import appointmentRoutes from './v1/routes/appointment.routes.js';
import staffRoutes from './v1/routes/staff.routes.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// middlewares
app.use(morgan('dev')); // para registro de solicitudes en formato 'dev'
app.use(express.json()); // para manejo de datos en formato JSON
app.use(express.urlencoded({extended: false})); // para manejo de datos en formato de URL codificada

// archivos estaticos
app.use(express.static(path.join(__dirname, '../client/build')));

// routes
app.use('/api/v1/owners', ownerRoutes);
app.use('/api/v1/pets', petRoutes);
app.use('/api/v1/appointments', appointmentRoutes);
app.use('/api/v1/staffs', staffRoutes);

app.get('*', (req, res) => {
  res.send(path.join(__dirname, '../client/build/index.html'));
});

export {app};
