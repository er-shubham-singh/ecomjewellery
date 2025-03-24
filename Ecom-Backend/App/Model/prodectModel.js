const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema(
  {
    name: String,
    category: String,
    categoryType: String,
    price: Number,
    metel: String,
    brand: String,
    purity: String,
    mainCategory: String,
    imageFile1: String,
    imageFile2: String,
  },
  { timestamps: true }
)

const ProductModel = mongoose.model('Product', ProductSchema)

module.exports = ProductModel
