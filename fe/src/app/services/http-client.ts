import axios from "axios";
import { sleep } from "../utils/sleep";

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

httpClient.interceptors.response.use(async (data) => {
  await sleep(5000);
  return data;
});
