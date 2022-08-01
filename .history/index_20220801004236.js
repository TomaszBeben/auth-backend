const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT

const app = express()

app.use('/api/getroute', require('./routes/getRoute'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})