import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modal";
import authReducer from "./auth";

const store = configureStore({
  reducer: {
    modalInfo: modalReducer,
    authInfo: authReducer,
  },
});

export default store;
