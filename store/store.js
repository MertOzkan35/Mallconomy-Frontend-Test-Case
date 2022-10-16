import { configureStore } from "@reduxjs/toolkit";
import DB from "./actions";
import completedDB from "./completedActions";
import score from "./score";
import { createWrapper } from "next-redux-wrapper";

const store = configureStore({
  reducer: {
    DB,
    completedDB,
    score,
  },
});

export default store;
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);
