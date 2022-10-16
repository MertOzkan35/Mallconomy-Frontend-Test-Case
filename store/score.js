import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  scoreDB: 0,
};

const score = createSlice({
  name: "score",
  initialState,
  reducers: {
    addScore: (state, { payload }) => {
      state.scoreDB += payload.point;
    },
  },
});

export const { addScore } = score.actions;

export default score.reducer;
