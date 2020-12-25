import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
  name: "mode",
  initialState: "light",
  reducers: {
    changeToLight(state) {
      return "light";
    },
    changeToDark(state) {
      return "dark";
    },
  },
});

export const { changeToLight, changeToDark } = modeSlice.actions;

export default modeSlice.reducer;
