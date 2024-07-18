import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "./AuthServices";

const getUserFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

const initialState = {
  user: getUserFromLocalStorage,
  loginStatus: "",
  message: "",
  spin: 0,
  spinStatus: "",
  spinError: "",
};

export const login = createAsyncThunk(
  "auth/login",
  async ({ api, userData }, thunkApi) => {
    try {
      const data = await authService.login(userData, api);
      console.log(data);
      if (data?.status === "failed") {
        return thunkApi.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const getSpin = createAsyncThunk(
  "auth/getSpin",
  async ({ api }, thunkApi) => {
    try {
      const response = await authService.getSpin(api);
      // console.log(response);
      // Transform response to only include serializable data
      const serializableData = {
        spin: response, // assuming response.data is the spin value
      };
      console.log(response);
      if (response.status == "failed") {
        return thunkApi.rejectWithValue(response.message);
      }
      return serializableData;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loginStatus = "loading";
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginStatus = "success";
        state.user = action.payload;
        state.message = "success";
      })
      .addCase(login.rejected, (state, action) => {
        state.loginStatus = "fail";
        state.message = action.payload;
      })
      .addCase(getSpin.pending, (state) => {
        state.spinStatus = "loading";
      })
      .addCase(getSpin.fulfilled, (state, action) => {
        state.spinStatus = "success";
        state.spin = action.payload.spin;
      })
      .addCase(getSpin.rejected, (state, action) => {
        state.spinStatus = "fail";
        state.spinError = action.payload;
      });
  },
});

export const selectLoginStatus = (state) => state.auth.loginStatus;
export const selectLoginUser = (state) => state.auth.user;
export const selectLoginMessage = (state) => state.auth.message;
export const selectSpinStatus = (state) => state.auth.spinStatus;
export const selectSpinError = (state) => state.auth.spinError;
export const selectSpin = (state) => state.auth.spin;
export default authSlice.reducer;
