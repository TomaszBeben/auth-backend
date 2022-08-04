const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/users', require('./routes/users'))

app.use(errorHandler)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})