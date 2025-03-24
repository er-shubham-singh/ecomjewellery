const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const { checkout, paymentverification } = require("../Controller/paymentController.js")

// Route for user signup
router.post("/checkout", checkout)
router.post("/paymentverification", paymentverification)

// Export the router for use in the main application
module.exports = router