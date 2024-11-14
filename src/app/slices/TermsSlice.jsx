import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

const initialState = {
  terms: "",
  termsStatus: "",
  termsMessage: null,
};

export const fetchTerms = createAsyncThunk(
  "terms/fetchTerms",
  async ({ api }, thunkApi) => {
    try {
      const data = await getData(api);

      if (data.status === "failed") {
        return thunkApi.rejectWithValue(data.message);
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const termsSlice = createSlice({
  name: "terms",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTerms.pending, (state) => {
      state.termsStatus = "loading";
    });
    builder.addCase(fetchTerms.fulfilled, (state, action) => {
      state.termsStatus = "success";
      // console.log(action.payload);
      state.terms = action.payload.data[0].text;
    });
    builder.addCase(fetchTerms.rejected, (state, action) => {
      state.termsStatus = "failed";
      state.termsMessage = action.error.message;
    });
  },
});

export const selectTerms = (state) => state.terms?.terms;

export default termsSlice.reducer;
