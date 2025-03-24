const fs = require('fs-extra')
const path = require('path')
const axios = require('axios')
const orderDetailsModel = require('../Model/orderDetail.js')

const orderDetails = async (req, res) => {
  try {
    const { userId, address, cartItems, totalPrice } = req.body
    let imageFile1 = null

    // Select only the first image
    const firstItemImage = cartItems.length > 0 ? cartItems[0].titleimg : null

    // Define the uploads directory
    const uploadsDir = path.join(__dirname, '../../uploads')

    // Ensure the uploads directory exists
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true })
    }

    if (req.file) {
      // If the user uploads an image, store the uploaded file
      imageFile1 = req.file.path
    } else if (firstItemImage) {
      // If no file is uploaded, download and store the first product image
      const imagePath = path.join(uploadsDir, `image_${Date.now()}.jpg`)
      const response = await axios({
        url: firstItemImage,
        responseType: 'stream',
      })

      await new Promise((resolve, reject) => {
        const writer = fs.createWriteStream(imagePath)
        response.data.pipe(writer)
        writer.on('finish', resolve)
        writer.on('error', reject)
      })

      imageFile1 = imagePath
    }

    console.log('Stored Image Path:', imageFile1)

    // Save Order in DB
    const newOrder = new orderDetailsModel({
      userId,
      address,
      cartItems,
      totalPrice,
      imageFile1, // Store only first image
    })

    await newOrder.save()

    res
      .status(201)
      .json({ message: 'Order stored successfully', order: newOrder })
  } catch (error) {
    console.error('Error storing order:', error)
    res.status(500).json({ message: 'Internal Server Error', error })
  }
}

const getOrderDetails = async (req, res) => {
  try {
    // Fetch all orders from the database
    const orders = await orderDetailsModel.find()

    if (orders.length === 0) {
      return res.status(404).json({ message: 'No orders found' })
    }

    res.status(200).json({ message: 'Orders retrieved successfully', orders })
  } catch (error) {
    console.error('Error fetching orders:', error)
    res.status(500).json({ message: 'Internal Server Error', error })
  }
}
module.exports = { orderDetails, getOrderDetails }
