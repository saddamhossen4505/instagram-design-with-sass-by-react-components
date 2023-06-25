import { createSlice } from "@reduxjs/toolkit";

// Create Counter Slice.
export const CounterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state, action) => {
      state.count = state.count + 1;
    },

    decrement: (state, action) => {
      state.count = state.count - 1;
    },

    reset: (state, action) => {
      state.count = 0;
    },
  },
});

// Export selector
export const countSelect = (state) => state.counter;
// Export action.
export const { increment, decrement, reset } = CounterSlice.actions;
// Export reducer
export default CounterSlice.reducer;
