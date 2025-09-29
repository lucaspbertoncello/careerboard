import axios from "axios";

export const httpClient = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
});

httpClient.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("careerBoard:token");

  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
