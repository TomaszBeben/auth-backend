const express = require('express')
const router = express.Router()

const helloApi = (req, res) => {
  res.send('Welcome To My API')
}

router.get('/', helloApi)

module.exports = router