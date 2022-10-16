import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  completedActionsDb: [],
};

const completedDB = createSlice({
  name: "completedDB",
  initialState,
  reducers: {
    addcompletedActions: (state, { payload }) => {
      state.completedActionsDb = [...state.completedActionsDb, payload];
    },
  },
});

export const { addcompletedActions } = completedDB.actions;
export default completedDB.reducer;
