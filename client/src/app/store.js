import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/CounterSlice";

// Create Store.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
