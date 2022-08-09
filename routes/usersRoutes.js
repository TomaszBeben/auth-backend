const express = require('express')
const router = express.Router()

const { registerUser, loginUser, getCredential } = require('../controllers/usersControllers')

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getCredential)


module.exports = router