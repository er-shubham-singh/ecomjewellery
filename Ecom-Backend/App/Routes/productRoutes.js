const express = require('express')
const {
  getProductsByCategoryType,
  getProducts,
  // getProductsByCategory,
  // getProductsBymainCategory,
} = require('../Controller/displayData.js')

const productRoutes = express.Router()

// Route to get products by category
// productRoutes.get('/:category', getProductsByCategory)

// Route to get products by category and categoryType
productRoutes.get('/:category/:categoryType', getProductsByCategoryType)
// productRoutes.get('/:category', getProductsByCategory)

// productRoutes.get('/:mainCategory', getProductsBymainCategory)
productRoutes.get('/:categoryOrMainCategory', getProducts)
module.exports = productRoutes
