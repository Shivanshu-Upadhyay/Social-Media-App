import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPost: [],
  
};

const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setAllPost: (state, action) => {
      state.allPost = action.payload;
    },
    
  },
});

export const { setAllPost } = postSlice.actions;
export default postSlice.reducer;
