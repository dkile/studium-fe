import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { NotAllowedError, NotAuthenticatedError, NotFoundError } from "./error";

function AuthErrorInterceptor(res: AxiosResponse): AxiosResponse {
  const { status } = res;

  if (status === 401) {
    throw new NotAuthenticatedError();
  }

  if (status === 403) {
    throw new NotAllowedError();
  }

  if (status === 404) {
    throw new NotFoundError();
  }

  return res;
}

function getAccessToken() {
  if (typeof window !== "undefined") {
    // 홈이면 토큰 처리 생략
    if (window.location.pathname === "/") {
      return "";
    }

    const accessToken = window.localStorage.getItem("studium-token");
    if (accessToken) {
      return accessToken;
    }

    alert("로그인 후 이용해주세요.");
    window.location.replace("/");
    throw Error("No AccessToken");
  }
  return "";
}

function AuthHeaderInterceptor(
  req: InternalAxiosRequestConfig,
): InternalAxiosRequestConfig {
  const token = getAccessToken();
  req.headers.Authorization = `Bearer ${token}`;

  return req;
}

export default function appAxios() {
  const instance = axios.create({
    baseURL: "https://studium.server.d0lim.com/api/v1",
    validateStatus: status => status < 500,
  });

  instance.interceptors.request.use(AuthHeaderInterceptor);
  instance.interceptors.response.use(AuthErrorInterceptor);

  return instance;
}
