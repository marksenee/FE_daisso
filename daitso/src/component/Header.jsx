import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <HeaderDiv>
      <HeaderLogo>DAITSO</HeaderLogo>
      <HeaderRight>
        <div>로그인</div>
        <div>회원가입</div>
      </HeaderRight>
    </HeaderDiv>
  );
}

export default Header;

const HeaderDiv = styled.div`
  border-bottom: 1.5px solid #da3731;

  display: flex;
  padding: 20px 40px 20px 40px;
  justify-content: space-between; //TODO: 왜안되노
`;

const HeaderLogo = styled.h1`
  color: #da3731;
  margin: 5px 5px 5px 5px;
  font-weight: 900;
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  color: #464646;
`;
