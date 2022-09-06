const express = require('express')
const router = express.Router()

const { polish_language } = require('../../languagesObjects/polishLanguage')

const polish = (req, res) => {
  res.json(polish_language)
}

router.get('/', polish)

module.exports = router