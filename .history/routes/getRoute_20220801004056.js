const express = require('express')
const router = express.Router()

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Route'})
})

module.exports = router