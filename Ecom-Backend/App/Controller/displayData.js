const ProductModel = require('../Model/prodectModel.js')
const getProducts = async (req, res) => {
  try {
    const { categoryOrMainCategory } = req.params // Use the correct param name
    console.log('Category or Main Category:', categoryOrMainCategory)

    let filter = {
      $or: [
        { category: { $regex: `^${categoryOrMainCategory}$`, $options: 'i' } },
        {
          mainCategory: {
            $regex: `^${categoryOrMainCategory}$`,
            $options: 'i',
          },
        },
      ],
    }

    const products = await ProductModel.find(filter)

    if (!products.length) {
      return res.status(404).json({ message: 'No products found' })
    }

    res.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ message: 'Server Error' })
  }
}
const getProductsByCategoryType = async (req, res) => {
  try {
    const { category, categoryType } = req.params
    console.log(`Category: ${category}, CategoryType: ${categoryType}`) // Debugging log

    const products = await ProductModel.find({
      category: { $regex: new RegExp('^' + category + '$', 'i') },
      categoryType: { $regex: new RegExp('^' + categoryType + '$', 'i') },
    })

    if (!products.length) {
      return res
        .status(404)
        .json({ message: 'No products found for this category type' })
    }

    res.json(products)
  } catch (error) {
    console.error('Error fetching products:', error)
    res.status(500).json({ message: 'Server Error' })
  }
}

const getProductsBySearch = async (req, res) => {
  try {
    const { searchTerm } = req.params
    console.log(`Search Term: ${searchTerm}`) // Debugging log

    // Search in category, categoryType, and name fields
    const products = await ProductModel.find({
      $or: [
        { category: { $regex: new RegExp(searchTerm, 'i') } },
        { categoryType: { $regex: new RegExp(searchTerm, 'i') } },
        { name: { $regex: new RegExp(searchTerm, 'i') } },
      ],
    })

    if (!products.length) {
      return res
        .status(404)
        .json({ message: 'No products found matching your search' })
    }

    res.json(products)
  } catch (error) {
    console.error('Error fetching products by search:', error)
    res.status(500).json({ message: 'Server Error' })
  }
}

module.exports = {
  // getProductsByCategory,
  // getProductsBymainCategory,
  getProducts,
  getProductsByCategoryType,
  getProductsBySearch,
}
