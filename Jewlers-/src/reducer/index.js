import { combineReducers } from "@reduxjs/toolkit";

import otpReducer from "../slices/OTPSlice"; // Ensure correct path
import authReducer from "../slices/authSlice";
import profileReducer from "../slices/profileSlice";
import addressReducer from "../slices/savedSlice"; // Import the new address slice

const rootReducer = combineReducers({
  otp: otpReducer,
  auth: authReducer,
  profile: profileReducer,
  address: addressReducer // Add the address slice
});

export default rootReducer;