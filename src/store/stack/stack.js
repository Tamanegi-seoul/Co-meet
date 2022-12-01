import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  stackList: [],
};

export const stackSlice = createSlice({
  name: "stack",
  initialState,
  reducers: {
    addStack: (state, action) => {
      state.stackList.unshift(action.payload.stack);
      console.log(state.stackList[0]);
    },
    deleteStack: (state, action) => {
      state.stackList = state.stackList.filter(
        element => element !== action.payload.stack
      );
      console.log(state.stackList[0]);
    },
  },
});

export const { addStack, deleteStack } = stackSlice.actions;

export default stackSlice.reducer;
