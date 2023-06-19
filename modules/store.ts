import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";

const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
  },
});

export default store;
