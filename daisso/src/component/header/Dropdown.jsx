import React from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLi } from "./styles";

function Dropdown() {
  const navigate = useNavigate();

  return (
    <HeaderLi>
      <li onClick={() => navigate("/mypage")}>마이페이지</li>
      <li>로그아웃</li>
    </HeaderLi>
  );
}

export default Dropdown;
