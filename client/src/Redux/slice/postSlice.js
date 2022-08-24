import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userName: "",
  profile_img: "",
};

const postSlice = createSlice({
  name: "postReducer",
  initialState,
  reducers: {
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    setProfile: (state, action) => {
      state.profile_img = action.payload;
    },
  },
});

export const { setUserName, setProfile } = postSlice.actions;
export default postSlice.reducer;
