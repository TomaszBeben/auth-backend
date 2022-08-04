const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const client = await mongoose.connect(process.env.MONGO_DB_URI)

    console.log(`DB Connected: ${client.connection.host}`);

  }catch (err) {

  }
}