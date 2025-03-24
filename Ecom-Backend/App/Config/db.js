const mongoose = require('mongoose')

const mongoURI =
  'mongodb+srv://shubhamsingh7985:Hacker@jewelleryecom.gybzb.mongodb.net/?retryWrites=true&w=majority&appName=JewelleryEcom'

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI)
    console.log('✅ Connected to MongoDB')
  } catch (error) {
    console.error('❌ MongoDB Connection Error:', error)
    process.exit(1)
  }
}

module.exports = connectDB