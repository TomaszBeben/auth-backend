const mongoose = require('mongoose')

const authSchema = mongoose.Schema({
  test: {
    type: String,
    required: [true, 'Please add a test value']
  }
}, {
  timestamps: true
})

module.exports = mongoose.model()