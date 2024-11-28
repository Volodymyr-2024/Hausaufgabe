import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [
    { id: 1, name: "Alice", email: "alice@examle.com" },
    { id: 2, name: "Bob", email: "bob@examle.com" },
    { id: 3, name: "Charlie", email: "charlie@examle.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
