import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderLi, LogoutButton } from "./styles";
import { getCookie, removeCookie } from "../../utils/Cookie";
import useToken from "../../hooks/useToken";
import { useDispatch } from "react-redux";
import { __logoutUsers } from "../../redux/modules/users";
import axios from "axios";

const access = getCookie("access_token");
axios.defaults.headers.common["authorization"] = access;
const refresh = getCookie("refresh_token");
axios.defaults.headers.common["refresh-token"] = refresh;

function Dropdown() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useToken();

  const onLogout = async () => {
    dispatch(__logoutUsers()).then((res) => {
      if (res.payload.success) {
        alert("로그아웃 완료!");
        navigate(`/`);
      } else {
        alert("로그아웃 실패");
      }
    });
  };

  return (
    <HeaderLi>
      <li onClick={() => navigate("/mypage")}>마이페이지</li>
      <li onClick={() => onLogout()}>로그아웃</li>
    </HeaderLi>
  );
}

export default Dropdown;
