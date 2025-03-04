import Axios from "axios";
import Cookies from "js-cookie";

function authRequestInterceptor(config: {
  headers: { token: string; Accept: string };
}) {
  const token = Cookies.get("musc-token");
  if (token) {
    config.headers.token = token;
  }
  config.headers.Accept = "application/json";
  return config;
}

export const axios = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor as any);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.message === "jwt expired") {
      Cookies.remove("musc-token");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
