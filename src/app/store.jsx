import { configureStore } from "@reduxjs/toolkit";
import wheelSlice from "./slices/WheelSlice";
import AuthSlice from "./slices/auth/AuthSlice";
import WinnerSlice from "./slices/WinnerSlice";
import termsSlice from "./slices/TermsSlice";

export const store = configureStore({
  reducer: {
    wheel: wheelSlice,
    auth: AuthSlice,
    winner: WinnerSlice,
    terms: termsSlice,
  },
});
