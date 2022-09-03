import React from "react";
import {
  ContainerStyle,
  LoginContainer,
  LoginFormField,
  ButtonContainer,
  ButtonElement,
} from "./styles";

function Login() {
  return (
    <>
      <ContainerStyle>
        <img src="../daisso.jpeg" width="75" height="75" />
        <LoginContainer>
          <LoginFormField placeholder="아이디" />
          <LoginFormField placeholder="비밀번호" />
          <ButtonContainer>
            <ButtonElement>로그인</ButtonElement>
            <ButtonElement>회원가입</ButtonElement>
          </ButtonContainer>
        </LoginContainer>
      </ContainerStyle>
    </>
  );
}

export default Login;
