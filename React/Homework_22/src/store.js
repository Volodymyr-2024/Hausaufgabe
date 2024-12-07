import { configureStore } from "@reduxjs/toolkit";
import quotesReducer from "./features/quote/quoteSlice";

const store = configureStore({
  reducer: {
    quotes: quotesReducer,
  },
});
export default store;
