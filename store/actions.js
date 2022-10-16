import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  actionsDb: [],
};

const DB = createSlice({
  name: "DB",
  initialState,
  reducers: {
    addActions: (state, action) => {
      state.actionsDb = action.payload;
    },
    deleteActions: (state, { payload }) => {
      state.actionsDb = state.actionsDb.filter(
        (item) => item.id !== payload.id
      );
    },
  },
});

export const { addActions, deleteActions } = DB.actions;

export default DB.reducer;
