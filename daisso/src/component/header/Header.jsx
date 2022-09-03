import React from "react";
import { HeaderDiv, HeaderLogo, HeaderRight } from "./styles";

function Header() {
  return (
    <HeaderDiv>
      <HeaderLogo>
        <img src="../daisso.jpeg" width="75" height="75" />
      </HeaderLogo>
      <HeaderRight>
        <div>로그인</div>
        <div>회원가입</div>
      </HeaderRight>
    </HeaderDiv>
  );
}

export default Header;
