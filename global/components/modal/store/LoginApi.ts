import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useAuthStore, useUserStore } from "./authStore";

/** 로그인
 * @param email string
 * @param password string
 */
const apiUrl: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const loginAPI = async (email: string, password: string) => {
  try {
    const response: AxiosResponse = await apiUrl.post("/api/users/login", {
      email,
      password,
    });
    if (response.data.accessToken) {
      console.log(response.data.user);
      useAuthStore
        .getState()
        .setToken(response.data.accessToken, response.data.refreshToken);
      useUserStore
        .getState()
        .setUserInfo(response.data.user.id, response.data.user.name);
    }
    return response.data;
  } catch (err) {
    console.log("error :", err);
    throw err;
  }
};
