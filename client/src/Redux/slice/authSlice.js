import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  auth: '',
  
};

const authSlice = createSlice({
  name: "authReducer",
  initialState,
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload;
    },
    
  },
});

export const { setAuth  } = authSlice.actions;
export default authSlice.reducer;
