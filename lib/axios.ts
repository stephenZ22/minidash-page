import axios from "axios";
import Cookies from "js-cookie";

export const mini_dash_api = axios.create({
  baseURL: "/api", // 👈 相对路径，走 Next.js rewrites
  headers: {
    "Content-Type": "application/json",
  },
});

// 拦截器：每次请求时动态带上最新 token
mini_dash_api.interceptors.request.use((config) => {
  const jwt_token = Cookies.get("jwt_token");
  if (jwt_token) {
    config.headers.Authorization = `Bearer ${jwt_token}`;
  }
  return config;
});
