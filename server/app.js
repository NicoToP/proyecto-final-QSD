import express from 'express'
import morgan from 'morgan'
import helmet from 'helmet'
import path, { dirname } from 'path'

import { fileURLToPath } from 'url'

import ownerRoutes from './v1/routes/owner.routes.js'
import petRoutes from './v1/routes/pet.routes.js'
import appointmentRoutes from './v1/routes/appointment.routes.js'
import staffRoutes from './v1/routes/staff.routes.js'
import auth from './v1/routes/auth.routes.js'

const app = express()
const __dirname = dirname(fileURLToPath(import.meta.url))

// middlewares
app.use(helmet())
app.use(morgan('dev')) // para registro de solicitudes en formato 'dev'
app.use(express.json()) // para manejo de datos en formato JSON
app.use(express.urlencoded({ extended: false })) // para manejo de datos en formato de URL codificada

// routes
app.use('/api/v1/owners', ownerRoutes)
app.use('/api/v1/pets', petRoutes)
app.use('/api/v1/appointments', appointmentRoutes)
app.use('/api/v1/staffs', staffRoutes)
app.use('/api/v1/auth', auth)

// static files
app.use(express.static(path.join(__dirname, '../client/build')))

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

export { app }
