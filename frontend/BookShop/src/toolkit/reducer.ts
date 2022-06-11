import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  books: [],
  loading: false,
  error: null,
};

export const useBooksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    getBooks: (state) => {
      state.loading = true;
    },
    getBooksSuccess: (state, action) => {
      state.books = action.payload;
      state.loading = false;
    },
    getBooksFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export default useBooksSlice.reducer;
