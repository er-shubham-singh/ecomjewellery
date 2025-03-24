

const express = require("express")
const router = express.Router()

// Import the required controllers and middleware functions
const { signup, sendOTP, addAddress, getUserAddresses, saveAddress } = require("../Controller/Auth.js")

// Route for user signup
router.post("/signup", signup)
router.post("/address", addAddress)
router.post("/savedAddress", saveAddress)

// Route for sending OTP to the user's email
router.post("/sendotp", sendOTP)
router.get("/getUserAddresses", getUserAddresses)

// Export the router for use in the main application
module.exports = router