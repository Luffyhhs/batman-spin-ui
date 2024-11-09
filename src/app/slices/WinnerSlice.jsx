import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";

const initialState = {
  top10List: [],
  top10Status: "",
  top10Error: null,

  moreWinners: [],
  moreWinnersStatus: "",
  moreWinnersError: null,
};
export const fetchTopWinner = createAsyncThunk(
  "winner/fetchTopWinner",
  async ({ api }, thunkApi) => {
    try {
      const data = await getData(api);
      if (data.status === "failed") {
        return thunkApi.rejectWithValue(data.message);
      }
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const fetchMoreWinner = createAsyncThunk(
  "winner/fetchMoreWinner",
  async ({ api }, thunkApi) => {
    try {
      const data = await getData(api);
      if (data.status === "failed") {
        return thunkApi.rejectWithValue(data.message);
      }
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

const winnerSlice = createSlice({
  name: "winner",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTopWinner.fulfilled, (state, action) => {
        state.top10Status = "succeed";
        state.top10List = action.payload.data;
      })
      .addCase(fetchTopWinner.pending, (state, action) => {
        state.top10Status = "loading";
      })
      .addCase(fetchTopWinner.rejected, (state, action) => {
        state.top10Status = "failed";
        state.top10Error = action.payload.message;
      })
      .addCase(fetchMoreWinner.rejected, (state, action) => {
        state.moreWinnersStatus = "failed";
        state.moreWinnersError = action.payload.message;
      })
      .addCase(fetchMoreWinner.pending, (state, action) => {
        state.moreWinnersStatus = "loading";
      })
      .addCase(fetchMoreWinner.fulfilled, (state, action) => {
        state.moreWinnersStatus = "succeed";
        state.moreWinners = action.payload.data.moreNames;
      });
  },
});

export const selectTop10 = (state) => state.winner?.top10List;
export const selectTop10Status = (state) => state.winner.top10Status;
export const selectTop10Error = (state) => state.winner.top10Error;
export const selectMoreWinners = (state) => state.winner?.moreWinners;
export const selectMoreWinnersStatus = (state) =>
  state.winner.moreWinnersStatus;
export const selectMoreWinnersError = (state) => state.winner.moreWinnersError;

export default winnerSlice.reducer;
