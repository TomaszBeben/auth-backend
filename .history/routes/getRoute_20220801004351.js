const express = require('express')
const router = express.Router()

router.get('/api/getroute', (req, res) => {
  res.status(200).json({ message: 'Get Route'})
})

module.exports = router