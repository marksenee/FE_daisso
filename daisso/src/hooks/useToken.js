import { getCookie } from "../utils/Cookie";

const useToken = () => {
  const token = getCookie("access_token");
  if (token) {
    const currentUser = token;
    return currentUser;
  } else {
    return null;
  }
};

export default useToken;
