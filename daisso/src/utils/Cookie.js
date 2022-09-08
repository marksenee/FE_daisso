import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setCookie = (name, value) => {
  const date = new Date();
  const expires = date.setMinutes(date.getMinutes() + 19);

  return cookies.set(name, value, {
    path: "/", // 모든 페이지에서 엑세스 가능
    secure: true,
    expires,
  });
};

export const getCookie = (name) => {
  return cookies.get(name);
};

export const removeCookie = (name) => {
  return cookies.remove(name, { path: "/" });
};
