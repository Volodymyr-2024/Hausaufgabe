import { configureStore } from "@reduxjs/toolkit";
import reducer from "./userSlice";

const store = configureStore({
  reducer: {
    users: reducer,
  },
});
export default store;
