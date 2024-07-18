import axios from "axios";
import { config } from "../../../Utils/axiosconfig";
import { base_url } from "../../../Utils/baseUrl";
const login = async (user, api) => {
  const response = await axios.post(`${base_url}${api}`, user);
  console.log(response);

  if (response.data) {
    if (response.data?.status !== "failed") {
      localStorage.setItem("user", JSON.stringify(response.data));
      localStorage.setItem("token", JSON.stringify(response.data.refreshToken));
    }
  }
  return response.data;
};
const getSpin = async (api) => {
  const response = await axios.get(`${base_url}${api}`, config);
  console.log(response);
  return response.data;
};
const getRandomLucky = async (api) => {
  const response = await axios.get(`${base_url}${api}`, "", config);

  return response.data;
};

const authService = {
  login,
  getSpin,
  getRandomLucky,
};

export default authService;
