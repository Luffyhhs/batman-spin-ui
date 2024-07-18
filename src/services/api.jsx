import { BASE_URL } from "../constants/Url";

const baseUrl = BASE_URL;
export const getData = async (api) => {
  console.log(`${baseUrl}${api}`);
  try {
    const response = await fetch(`${baseUrl}${api}`);
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Error getting data");
  }
};
