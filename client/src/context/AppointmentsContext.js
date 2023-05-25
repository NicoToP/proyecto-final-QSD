import { useState, createContext, useContext, useEffect } from 'react'
import {
  getAppointmentsRequests,
  getAppointmentRequests,
  createAppointmentRequest,
  updateAppointmentRequest,
  deleteAppointmentRequest,
} from '../api/appointments'

const AppointmentContext = createContext()

export const useAppointment = () => {
  const context = useContext(AppointmentContext)
  if (!context) throw new Error('Appointment Provider is missing')
  return context
}

export const AppointmentProvider = ({ children }) => {
  const [Appointment, setAppointment] = useState([])

  useEffect(() => {
    ;(async () => {
      const res = await getAppointmentsRequests()
      setAppointment(res.data)
    })()
  }, [])

  const getAppointments = async () => {
    try {
      const res = await getAppointmentsRequests()
      setAppointment(res.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getAppointment = async (id) => {
    try {
      const res = await getAppointmentRequests(id)
      return res
    } catch (error) {
      console.error(error)
    }
  }

  const createAppointment = async (Appointment) => {
    try {
      const res = await createAppointmentRequest(Appointment)
      setAppointment([...Appointment, res.data])
    } catch (error) {
      console.error(error)
    }
  }

  const updateAppointment = async (id, Appointment) => {
    try {
      const res = await updateAppointmentRequest(id, Appointment)
      setAppointment(
        Appointment.map((Appointment) =>
          Appointment._id === id ? res.data : Appointment
        )
      )
    } catch (error) {
      console.error(error)
    }
  }

  const deleteAppointment = async (id) => {
    const res = await deleteAppointmentRequest(id)
    if (res.status === 204)
      setAppointment(
        Appointment.filter((Appointment) => Appointment._id !== id)
      )
  }

  /* useEffect(() => {
    getAppointment();
  }, []); */

  return (
    <AppointmentContext.Provider
      value={{
        Appointment,
        setAppointment,
        getAppointments,
        getAppointment,
        createAppointment,
        updateAppointment,
        deleteAppointment,
      }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}
