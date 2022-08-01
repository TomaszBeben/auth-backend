const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Get Users'})
})
router.post('/', (req, res) => {
  res.status(200).json({ message: 'Post User'})
})
router.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}`})
})
router.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Update User ${req.params.id}`})
})

module.exports = router