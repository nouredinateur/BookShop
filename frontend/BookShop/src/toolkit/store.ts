import { configureStore } from "@reduxjs/toolkit";
import BooksSlice from "./reducer";
export const store = configureStore({
  reducer: {
    // reducer
    books: BooksSlice,
  },
});
