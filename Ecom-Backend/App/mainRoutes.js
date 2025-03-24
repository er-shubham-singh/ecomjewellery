const express = require('express')
const productRoutes = require('./Routes/productRoutes.js')

const mainRoutes = express.Router()

// Use product routes
mainRoutes.use('/products', productRoutes)

module.exports = { mainRoutes }
