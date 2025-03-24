import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  otp: '',
  email: ''
}

const otpSlice = createSlice({
  name: 'otp',
  initialState,
  reducers: {
    setOtp(state, action) {
      state.otp = action.payload;
    },
    setEmail(state, action) {
      state.email = action.payload;
    }
  }
})

export const { setOtp, setEmail } = otpSlice.actions; // Export setEmail too
export default otpSlice.reducer;
