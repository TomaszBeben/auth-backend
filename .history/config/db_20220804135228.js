const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_DB_URI)

    console.log(`DB Connected: ${connection.connection.host}`);

  }catch (err) {

  }
}