const express = require('express')
const router = express.Router()

const { getGoals, postGoal, updateGoal, deleteGoal } = require('../controllers/goalsControllers')

const { protect } = require('../middleware/authMiddleware')

router.get('/', protect, getGoals)
router.post('/', protect, postGoal)
router.put('/:id', protect, updateGoal)
router.delete('/:id', protect, deleteGoal)

module.exports = router