import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRewardList = createAsyncThunk(
  "wheel/fetchRewardList",
  async () => {}
);

const initialState = {
  rewardList: [],
  object: {
    name: "heinhtet",
    work: "developer",
    skill: ["html", "js"],
  },
};

const adsSlice = createSlice({
  name: "adsSlice",
  initialState,
  reducers: {},
});

export default adsSlice.reducer;
