import React, { useState } from "react";
import Dropdown from "./Dropdown";
import { HeaderDiv, HeaderLogo, HeaderRight, HeaderUl } from "./styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";

function Header() {
  const [view, setView] = useState(false);

  return (
    <HeaderDiv>
      <HeaderLogo>
        <img src="../daisso.jpeg" alt="logo" width="75" height="75" />
      </HeaderLogo>
      <HeaderRight>
        {/* <div>로그인</div>
        <div>회원가입</div> */}
        <HeaderUl
          onClick={() => {
            setView(!view);
          }}
        >
          반가워요, nickname 님!{" "}
          {view ? (
            <KeyboardArrowUpIcon
              viewBox="0 -5 24 24"
              style={{ marginLeft: "5px" }}
            />
          ) : (
            <KeyboardArrowDownIcon
              viewBox="0 -5 24 24"
              style={{ marginLeft: "5px" }}
            />
          )}
          {view && <Dropdown />}
        </HeaderUl>
      </HeaderRight>
    </HeaderDiv>
  );
}

export default Header;
