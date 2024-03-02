const getTokenFromLocalStorage = localStorage.getItem("token")
  ? JSON.parse(localStorage.getItem("token"))
  : null;
export const config = {
  headers: {
    authorization: `Bearer ${
      getTokenFromLocalStorage !== null ? getTokenFromLocalStorage : ""
    }`,
    Accept: "application/json",
  },
};

