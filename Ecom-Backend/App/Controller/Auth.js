const User = require('../Model/User.js')
const OTP = require('../Model/OTP.js')
const otpGenerator = require('otp-generator');
const JWT_SECRET = "Naresh"
const jwt = require('jsonwebtoken')
const Address = require('../Model/Addres.js')
const mongoose = require('mongoose')
const SavedAddress = require('../Model/SavedAddress.js')


// Signup Controller for Registering USers
exports.signup = async (req, res) => {
  try {
    // Destructure fields from the request body
    const { title, fullName, email, phoneNumber } = req.body;

    // Check if all details are provided
    if (!title || !fullName || !email || !phoneNumber) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }

    // Check if the user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    // Find the most recent OTP for the email
    // const response = await OTP.find({ email }).sort({ createdAt: -1 }).limit(1);
    // console.log("recentOtp", response);

    // if (response.length === 0 || otp !== response[0].otp) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "The OTP is not valid",
    //   });
    // }

    // Create a new user
    const user = await User.create({
      title,
      fullName,
      email,
      phoneNumber,
    });

    // Generate JWT token
    const token = jwt.sign(
      {
        email: user.email,
        id: user._id,
      },
      JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );
    console.log("token", token);

    // Save token to user document in database
    user.token = token;

    // Set cookie for token and return success response
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
      httpOnly: true,
    };

    return res.status(200).json({
      success: true,
      token,
      user,
      message: "User registered successfully",
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "User cannot be registered. Please try again.",
    });
  }
};

// Send OTP For Email Verification
// Send OTP or Return Token if User Exists
exports.sendOTP = async (req, res) => {
  try {
    const { email } = req.body;

    // Check if user already exists
    let user = await User.findOne({ email });

    if (user) {
      // Generate JWT token
      const token = jwt.sign(
        { email: user.email, id: user._id },
        JWT_SECRET,
        { expiresIn: "24h" }
      );

      // Save token to user document
      user.token = token;
      await user.save();

      return res.status(200).json({
        success: true,
        token,
        user,
        message: "User already exists. JWT token generated.",
      });
    }

    // Generate unique OTP
    let otp;
    let isUnique = false;

    while (!isUnique) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
        lowerCaseAlphabets: false,
        specialChars: false,
      });

      const existingOTP = await OTP.findOne({ otp });
      if (!existingOTP) isUnique = true;
    }

    // Save OTP to database
    await OTP.create({ email, otp });

    return res.status(200).json({
      success: true,
      message: "OTP sent successfully",
      otp, // Remove this in production
    });

  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to send OTP. Please try again.",
    });
  }
};

// Login controller for authenticating users
exports.saveAddress = async (req, res) => {
  try {
    console.log("in");
    const { address, name, email, phoneNumber, locality, city, state, pinCode } = req.body;

    // Create and save the address
    const saved = await SavedAddress.create({ address, name, email, phoneNumber, locality, city, state, pinCode });

    // Send a success response
    return res.status(201).json({
      success: true,
      message: "Address saved successfully",
      data: saved,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to save address. Please try again.",
      error: error.message,
    });
  }
};

exports.addAddress = async (req, res) => {
  try {
    const { name, email, phoneNumber, pinCode, city, state, address, locality, id } = req.body;
    const userId = new mongoose.Types.ObjectId(id);

    console.log("Received Data:", { name, email, phoneNumber, pinCode, city, state, address, locality, id });

    // ✅ Validation for missing fields
    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "User not authenticated",
      });
    }

    if (!name || !email || !phoneNumber || !pinCode || !city || !state || !address || !locality || !userId) {
      return res.status(403).json({
        success: false,
        message: "All Fields are required",
      });
    }



    // ✅ Create a new address linked to the user
    const newAddress = await Address.create({
      user: userId,
      name,
      email,
      phoneNumber,
      pinCode,
      city,
      state,
      address,
      locality
    });

    // ✅ Add the address ID to the user's addresses array
    await User.findByIdAndUpdate(userId, {
      $push: { addresses: newAddress._id }
    });

    res.status(201).json({
      success: true,
      addressDetails: newAddress,
      message: "Address added successfully",
    });

  } catch (error) {
    console.error("Error in addAddress:", error.message);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};

exports.getUserAddresses = async (req, res) => {
  try {
    const { id } = req.query; // Extract user ID from query parameters
    console.log("Received User ID:", id);

    if (!id) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    // Check if the provided ID is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid user ID format",
      });
    }

    const userId = new mongoose.Types.ObjectId(id);

    // Find the user and populate their addresses
    const user = await User.findById(userId).populate("addresses");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log("Fetched User:", user);

    res.status(200).json({
      success: true,
      addresses: user.addresses,
    });

  } catch (error) {
    console.error("Error fetching user addresses:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: error.message,
    });
  }
};


