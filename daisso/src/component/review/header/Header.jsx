import React from "react";
import { HeaderDiv, HeaderLogo, HeaderRight, HeaderButton } from "./styles";

function ReviewHeader() {
  return (
    <>
      <HeaderDiv>
        <HeaderLogo>
          <img src="../daisso.jpeg" width="75" height="75" />
        </HeaderLogo>
        <HeaderRight>
          <HeaderButton>마이페이지</HeaderButton>
        </HeaderRight>
      </HeaderDiv>
    </>
  );
}

export default ReviewHeader;
