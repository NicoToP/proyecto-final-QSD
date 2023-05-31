/* import User from "../models/User.js"; */

export const getUser = async (req, res) => {
  try {
    return res.status(200).json({ message: 'getUser' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: error.message })
  }
}

export const createUser = async (req, res) => {
  try {
    return res.status(200).json({ message: 'createUser' })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ message: error.message })
  }
}
