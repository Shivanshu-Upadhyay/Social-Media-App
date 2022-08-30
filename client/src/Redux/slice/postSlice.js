import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPost: [],
  onePost: [],
};

const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setAllPost: (state, action) => {
      state.allPost = action.payload;
    },
    setOnePost: (state, action) => {
      state.onePost = action.payload;
    },
  },
});

export const { setAllPost, setOnePost } = postSlice.actions;
export default postSlice.reducer;
