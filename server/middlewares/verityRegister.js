import User from '../models/User.js'
import Joi from '@hapi/joi'

const schemaRegister = Joi.object({
  name: Joi.string().min(6).max(255).required(),
  email: Joi.string().min(6).max(255).email().required(),
  password: Joi.string().min(6).max(255).required(),
})

export const checkExistingUser = async (req, res, next) => {
  const { email } = req.body
  const isEmailExist = await User.findOne({ email })

  if (isEmailExist) {
    return res.status(400).json({
      error: 'Email ya registrado',
    })
  }

  next()
}

export const checkSchemaRegister = async (req, res, next) => {
  const { name, email, password } = req.body
  const { error } = schemaRegister.validate({ name, email, password })

  if (error) {
    return res.status(400).json({
      error: error.details[0].message,
    })
  }

  next()
}
