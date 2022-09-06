import jwt_decode from "jwt-decode";

const useDecodeToken = (token) => {
  if (token) {
    const decode_token = jwt_decode(token);
    const nickName = decode_token.sub;
    return nickName;
  } else {
    return "nickName";
  }
};

export default useDecodeToken;
