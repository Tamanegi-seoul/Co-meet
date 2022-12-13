import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value, options) => {
  return cookies.set(name, value, { path: "/", secure: true });
};

export const getCookie = name => {
  return cookies.get(name);
};

export const removeCookie = name => {
  removeCookie(name, { path: "/", secure: true });
};
