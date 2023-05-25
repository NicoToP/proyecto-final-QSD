import axios from 'axios'

export const getAppointmentsRequests = async () =>
  await axios.get('/api/v1/appointments')

export const getAppointmentRequests = async (id) =>
  await axios.get(`/api/v1/appointments/${id}`)

export const createAppointmentRequest = async (Appointment) =>
  await axios.post('/api/v1/appointments', Appointment)

export const updateAppointmentRequest = async (id, Appointment) =>
  await axios.put(`/api/v1/appointments/${id}`, Appointment)

export const deleteAppointmentRequest = async (id) =>
  await axios.delete(`/api/v1/appointments/${id}`)
