import { Router } from 'express'

import {
  getAllStaffs,
  getStaff,
  createStaff,
  updateStaff,
  removeStaff
} from '../../controllers/staff.controller.js'

const router = Router()

router.get('/', getAllStaffs)

router.get('/:id', getStaff)

router.post('/', createStaff)

router.put('/:id', updateStaff)

router.delete('/:id', removeStaff)

export default router
