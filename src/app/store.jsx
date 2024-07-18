import { configureStore } from "@reduxjs/toolkit";
import wheelSlice from "./slices/WheelSlice";
import AuthSlice from "./slices/auth/AuthSlice";

export const store = configureStore({
  reducer: {
    wheel: wheelSlice,
    auth: AuthSlice,
  },
});
