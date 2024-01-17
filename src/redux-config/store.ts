import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/slice";

export const Store = configureStore({
  reducer: {
    counter: counterSlice,
  },
});
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
