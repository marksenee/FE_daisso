import React from "react";
import SingupModal from "../signup/SignUpModal";
import useShowModal from "../../hooks/useShowModal";
import {
  ContainerStyle,
  LoginContainer,
  LoginFormField,
  ButtonContainer,
  ButtonElement,
} from "./styles";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const navigate = useNavigate();
  const [isModal, ModalHandler] = useShowModal();

  return (
    <>
      <ContainerStyle onClick={() => navigate(`/`)}>
        <img src="../daisso.jpeg" width="75" height="75" />
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
