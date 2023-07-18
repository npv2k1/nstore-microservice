import axios from "axios";
import Cookies from "js-cookie";
import { APP_API_URL } from "src/common/configs";

const request = axios.create({
  baseURL: APP_API_URL, // TODO: take this api URL from env
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// Change request data/error here
request.interceptors.request.use(
  async (config) => {
    const token = Cookies.get("AUTH_TOKEN");
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ""}`,
    };
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
