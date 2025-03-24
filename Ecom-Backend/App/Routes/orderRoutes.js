const express = require("express")
const { uploads } = require("../Middleware/middleware.js")
const { orderDetails, getOrderDetails } = require("../Controller/orderDetails.js")
const orderRouter = express.Router()


orderRouter.post("/inserOrderDetails",uploads('uploads/cartImage').single('imageFile'),orderDetails).post("/insert",uploads('uploads/cartImage').single('imageFile'),orderDetails)
orderRouter.get("/dislayOrderDetails",getOrderDetails)
module.exports={orderRouter}



