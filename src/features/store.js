import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from '../features/userSlice'; // Import userSlice, not useReducer

export default configureStore({
    reducer: {
      user: userSlice.reducer  // Use userSlice.reducer instead of useReducer
    },
});
