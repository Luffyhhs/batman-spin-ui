import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../services/api";
import { config } from "../../Utils/axiosconfig";
import { base_url } from "../../Utils/baseUrl";
import axios from "axios";

export const fetchRewardList = createAsyncThunk(
  "wheel/fetchRewardList",
  async ({ api }) => {
    const data = await getData(api);
    return data;
  }
);
export const fetchAdsList = createAsyncThunk(
  "wheel/fetchAdsList",
  async ({ api }) => {
    const data = await getData(api);
    console.log(data);
    return data;
  }
);

export const fetchWheelImg = createAsyncThunk(
  "wheel/fetchWheelImg",
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

export const getRandomLucky = createAsyncThunk(
  "wheel/getRandomLucky",
  async ({ api }, thunkApi) => {
    try {
      const response = await axios.get(`${base_url}${api}`, config);
      // Transform response to only include serializable data
      const serializableData = {
        data: response.data,
        status: response.status,
        statusText: response.statusText,
      };
      // console.log(serializableData);
      return serializableData;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
export const updateLucky = createAsyncThunk(
  "wheel/updateLucky",
  async ({ api, data }, thunkApi) => {
    try {
      const response = await axios.put(`${base_url}${api}`, data, config);
      console.log(response);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);
const initialState = {
  rewardList: [],
  rewardListStatus: "",
  rewardListError: "",

  adsList: [],
  adsListStatus: "",
  adsListError: "",

  wheelStatus: "",
  wheelArr: [],
  wheelError: "",

  updateLuckyStatus: "",
  updateLuckyError: "",

  luckyObj: {},
  luckyStatus: "",
  luckyError: "",

  deg: 0,
};

const wheelSlice = createSlice({
  name: "wheel",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRewardList.pending, (state) => {
        state.rewardListStatus = "loading";
      })
      .addCase(fetchRewardList.fulfilled, (state, action) => {
        state.rewardListStatus = "succeed";
        state.rewardList = action.payload;
      })
      .addCase(fetchRewardList.rejected, (state, action) => {
        state.rewardListStatus = "failed";
        state.rewardListError = action.error.message;
      })
      .addCase(fetchAdsList.pending, (state) => {
        state.adsListStatus = "loading";
      })
      .addCase(fetchAdsList.fulfilled, (state, action) => {
        state.adsListStatus = "succeed";
        state.adsList = action.payload;
      })
      .addCase(fetchAdsList.rejected, (state, action) => {
        state.adsListStatus = "failed";
        state.adsListError = action.error.message;
      })
      .addCase(fetchWheelImg.pending, (state) => {
        state.wheelStatus = "loading";
      })
      .addCase(fetchWheelImg.fulfilled, (state, action) => {
        state.wheelStatus = "success";
        state.wheelArr = action.payload.data;
      })
      .addCase(fetchWheelImg.rejected, (state, action) => {
        state.wheelStatus = "fail";
        state.wheelError = action.payload;
      })
      .addCase(getRandomLucky.pending, (state) => {
        state.luckyStatus = "loading";
      })
      .addCase(getRandomLucky.fulfilled, (state, action) => {
        state.luckyStatus = "success";
        state.luckyObj = action.payload.data.updatedLucky;
        state.deg = action.payload.data.deg;
      })
      .addCase(getRandomLucky.rejected, (state, action) => {
        state.luckyStatus = "fail";
        state.luckyError = action.payload;
      })
      .addCase(updateLucky.pending, (state) => {
        state.updateLuckyStatus = "loading";
      })
      .addCase(updateLucky.fulfilled, (state) => {
        state.updateLuckyStatus = "success";
      })
      .addCase(updateLucky.rejected, (state, action) => {
        state.updateLuckyStatus = "fail";
        state.updateLuckyError = action.payload.message;
      });
  },
});

export const { setImage } = wheelSlice.actions;

export const selectRewardList = (state) => {
  console.log(state);
  return state.wheel.rewardList;
};
export const selectRewardListStatus = (state) => state.wheel.rewardListStatus;
export const selectAdsList = (state) => {
  return state.wheel.adsList;
};
export const selectAdsListStatus = (state) => state.wheel.adsListStatus;
export const selectWheelArr = (state) => state.wheel.wheelArr;
export const selectWheelStatus = (state) => state.wheel.wheelStatus;
export const selectWheelError = (state) => state.wheel.wheelError;
export const selectLuckyObj = (state) => state.wheel.luckyObj;
export const selectLuckyStatus = (state) => state.wheel.luckyStatus;
export const selectLuckyError = (state) => state.wheel.luckyError;
export const selectDeg = (state) => state.wheel.deg;
export const selectUpdateLuckyStatus = (state) => state.wheel.updateLuckyStatus;
export const selectUpdateLuckyError = (state) => state.wheel.updateLuckyError;

export default wheelSlice.reducer;
