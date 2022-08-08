const express = require('express')
const router = express.Router()

const { getUsers, postUser, updateUser, deleteUser } = require('../controllers/usersControllers')

router.get('/', getUsers)
router.post('/', postUser)
router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

module.exports = router