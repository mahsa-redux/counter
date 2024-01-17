import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: CounterState = {
  count: 0,
};

interface CounterState {
  count: number;
}
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
    configNumber: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, reset, configNumber } =
  counterSlice.actions;
// export const selectCount = (state: RootState) => state.counter.value;
export default counterSlice.reducer;
