import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
// import addressSlice from "../features/addressSlice";
// import orderSlice from "../features/orderSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    // order: orderSlice,
  },
});

export default store;