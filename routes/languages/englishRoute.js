const express = require('express')
const router = express.Router()

const { english_language } = require('../../languagesObjects/englishLanguage')

const english = (req, res) => {
  res.json(english_language)
}

router.get('/', english)

module.exports = router