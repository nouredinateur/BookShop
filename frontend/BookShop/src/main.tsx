import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ApiProvider } from "@reduxjs/toolkit/query/react";
import { apiSlice } from "./api/apiSlice";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookDetailsScreen from "./screens/BooksDetailsScreen";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/book" element={<BookDetailsScreen />}>
            <Route path="/book/:id" element={<BookDetailsScreen />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ApiProvider>
  </React.StrictMode>
);
