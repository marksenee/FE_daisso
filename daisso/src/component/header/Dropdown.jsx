import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLi } from "./styles";
import { removeCookie } from "../../utils/Cookie";
import useToken from "../../hooks/useToken";

function Dropdown() {
  const navigate = useNavigate();

  const token = useToken();

  const onLogout = () => {
    removeCookie("access_token");
  };

  return (
    <HeaderLi>
      <li onClick={() => navigate("/mypage")}>마이페이지</li>
      <button onClick={() => onLogout()}>로그아웃</button>
    </HeaderLi>
  );
}

export default Dropdown;
