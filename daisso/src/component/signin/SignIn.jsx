import React from "react";
import { useSelector } from "react-redux";
import SingupModal from "../signup/SignUpModal";
import useShowModal from "../../hooks/useShowModal";
import {
  ContainerStyle,
  LoginContainer,
  LoginFormField,
  ButtonContainer,
  ButtonElement,
  LogoButton,
} from "./styles";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [isModal, ModalHandler] = useShowModal();

  const { users } = useSelector((state) => state.users);
  console.log("users", users);

  return (
    <>
      <ContainerStyle>
        <LogoButton onClick={() => navigate(`/`)}>
          <img src="../daisso.jpeg" width="75" height="75" />
        </LogoButton>
        <LoginContainer>
          <LoginFormField placeholder="아이디" />
          <LoginFormField placeholder="비밀번호" />
          <ButtonContainer>
            <ButtonElement>로그인</ButtonElement>
            <ButtonElement onClick={() => ModalHandler()}>
              회원가입
            </ButtonElement>
            <SingupModal show={isModal} modalHandler={ModalHandler} />
          </ButtonContainer>
        </LoginContainer>
      </ContainerStyle>
    </>
  );
}

export default SignIn;
