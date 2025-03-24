import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  saveaddress: JSON.parse(localStorage.getItem("saveaddress")) || null
};

const addressSlice = createSlice({
  name: "saveaddress",
  initialState,
  reducers: {
    setAddress(state, action) {
      state.saveaddress = action.payload;
      localStorage.setItem("saveaddress", JSON.stringify(action.payload)); // Persist to localStorage
    }
  }
});

export const { setAddress } = addressSlice.actions;
export default addressSlice.reducer;