import { BASE_URL } from "../constants/Url";

const baseUrl = BASE_URL;
const token = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
export const getData = async (api) => {
  // console.log(`${baseUrl}${api}`);
  try {
    const response = await fetch(`${baseUrl}${api}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error getting data");
  }
};

export const getDataWithToken = async (api) => {
  try {
    const response = await fetch(`${baseUrl}${api}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
      },
    });
    // if (!response.ok) {
    //   throw new Error("Network Response was not ok.");
    // }
    const data = await response.json();
    // console.log(data);
    return data;
  } catch (error) {
    throw new Error("error getting with token:" + error.message);
  }
};
