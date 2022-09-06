const express = require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const router = require('./routes/usersRoutes')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/', require('./routes/helloApi'))

app.use('/api/language/pl', require('./routes/languages/polishRoute'))
app.use('/api/language/en', require('./routes/languages/englishRoute'))

app.use('/api/goals', require('./routes/goalRoutes'))
app.use('/api/users', require('./routes/usersRoutes'))

app.use(errorHandler)



app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})