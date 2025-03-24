const express = require('express')
const cors = require('cors')
const path = require('path')
const mongoose = require('mongoose')
const { mainRoutes } = require('./App/mainRoutes.js')
const { insertDummyProducts } = require('./App/Controller/productInsert.js')
const userRoute = require('./App/Routes/User.js')
const { getProductsBySearch } = require('./App/Controller/displayData.js')
const payment = require('./App/Routes/Payment.js')
const { orderRouter } = require('./App/Routes/orderRoutes.js')
const personalInfoRoute = require('./App/Routes/personalInfo.js')
const connectDB = require('./App/Config/db.js')

const app = express()

// Middleware
app.use(cors())
app.use(express.json()); // Middleware for parsing JSON
app.use(express.urlencoded({ extended: true })); // Middleware for parsing form data

// // Serve static files from 'uploads/EmployeeImage'
app.use("/uploads/cartImage",express.static("uploads/cartImage"))

// Routes
app.use('/api', mainRoutes)
app.use('/api/auth', userRoute)
app.use('/api/search/:searchTerm', getProductsBySearch)
const key = 'rzp_live_EBuzVcjPIzSRzu'

app.get('/api/getkey', (req, res) => {
  return res.status(200).json({
    key,
  })
})

app.use('/api/payment', payment)


// for order details
app.use('/api',orderRouter)

// Personal information
app.use('/api',personalInfoRoute)

// MongoDB Connection
// mongoose
//   .connect('mongodb://localhost:27017/Jewellery', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(async () => {
//     console.log('✅ Connected to MongoDB')
//     await insertDummyProducts() // Ensure it completes before proceeding
//   })
//   .catch((error) => console.error('❌ MongoDB Connection Error:', error))

connectDB()
  .then(async () => {
    await insertDummyProducts() // Ensure dummy products are inserted after DB connection
  })
  .catch((error) => console.error('❌ MongoDB Connection Error:', error))

// Start Server

app.listen(8000, () => console.log(`🚀 Server running on http://localhost`))
