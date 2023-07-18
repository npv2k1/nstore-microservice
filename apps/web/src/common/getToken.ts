import Cookies from "js-cookie";

export const getToken = () => {
  if (typeof window === undefined) {
    return null;
  }
  return Cookies.get("AUTH_TOKEN");
};

export const setAuthToken = (token: string) => {
  if (typeof window === undefined) {
    return null;
  }
  Cookies.set("AUTH_TOKEN", token);
};
