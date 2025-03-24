import { createSlice } from "@reduxjs/toolkit";

const storedUser = localStorage.getItem("user");

let parsedUser = null;
try {
  parsedUser = storedUser ? JSON.parse(storedUser) : null;  // ✅ Safe JSON parsing
} catch (error) {
  console.error("Error parsing user from localStorage:", error);
  localStorage.removeItem("user"); // ❌ Remove corrupted data
  parsedUser = null;
}

const initialState = {
  user: parsedUser,
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload)); // ✅ Store properly
    },
    clearUser(state) {
      state.user = null;
      localStorage.removeItem("user"); // ✅ Clear user on logout
    },
  },
});

export const { setUser, clearUser } = profileSlice.actions;
export default profileSlice.reducer;