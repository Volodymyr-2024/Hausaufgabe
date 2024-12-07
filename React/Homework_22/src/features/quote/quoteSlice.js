import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  quote: "Think big thoughts but relish small pleasures",
  author: "H. Jackson Brown Jr",
  status: "idle",
  error: null,
};
export const fetchQuotes = createAsyncThunk("quotes/fetchQuotes", async () => {
  const response = await axios.get("https://dummyjson.com/quotes/random");
  return response.data;
});

const quateSlice = createSlice({
  name: "quotes",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuotes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuotes.fulfilled, (state, action) => {
        (state.status = "succeeded"),
          (state.quote = action.payload.quote),
          (state.author = action.payload.author);
      })
      .addCase(fetchQuotes.rejected, (state, action) => {
        (state.status = "failed"), (state.error = action.payload.message);
      });
  },
});
export default quateSlice.reducer;
