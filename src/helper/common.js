import axios from "axios";
import { API_ROUTES } from "@/constants/path";

const storeTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

const getTokenFromLocalStorage = () => {
  return localStorage.getItem("token");
};

const getAuthenticatedUser = async () => {
  const defaultReturnObject = { authenticated: false, user: null };

  try {
    const token = getTokenFromLocalStorage();

    if (!token) {
      return defaultReturnObject;
    }

    const response = await axios({
      method: "POST",
      url: API_ROUTES.getUser,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { authenticated = false } = response.data;

    return authenticated ? response.data : false;
  } catch (err) {
    console.log("getAuthenticatedUser, something went wrong", err);
    
    return defaultReturnObject;
  }
};

export {
  storeTokenInLocalStorage,
  getTokenFromLocalStorage,
  getAuthenticatedUser,
};
