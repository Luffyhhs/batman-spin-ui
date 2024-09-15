const getTokenFromLocalStorage = localStorage.getItem("user")
  ? JSON.parse(localStorage.getItem("user"))
  : null;

export const config = {
  headers: {
    Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
    Accept: "application/json",
  },
};
