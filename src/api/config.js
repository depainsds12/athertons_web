import axios from "axios";

export const getBaseURL = () => {
  return import.meta.env.VITE_API_URL;
};

export const axiosInstance = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAxios = () => {
  return axiosInstance;
};
