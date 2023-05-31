import jwt from 'jsonwebtoken'
import { SECRET } from '../config/auth.config.js'
import User from '../models/User.js'
import Role from '../models/Role.js'

export const verifyToken = async (req, res, next) => {
  const token = req.headers['x-access-token']

  if (!token) {
    return res.status(403).send({ message: 'No token provided!' })
  }

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: 'Unauthorized!' })
    }
    req.userId = decoded.id
    next()
  })
}

export const isModerator = async (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err })
          return
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === 'moderator') {
            next()
            return
          }
        }

        return res.status(403).send({ message: 'Require Moderator Role!' })
      }
    )
  })
}

export const isAdmin = async (req, res, next) => {
  try {
    const { email } = req.body

    const user = await User.findOne({ email })
    const roles = await Role.find({ _id: { $in: user.roles } })

    if (!user) return

    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === 'admin') {
        next()
        return
      }
    }
    res.status(403).send({ message: 'Require Admin Role!' })
    return
  } catch (err) {
    return res.status(500).send({ message: err })
  }
}
