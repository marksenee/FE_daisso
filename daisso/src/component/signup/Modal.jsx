import React from "react";
import ReactDom from "react-dom";
import {
  ModalBox,
  SignupForm,
  SignupFormField,
  DoubleCheckButton,
  SignupButton,
  CloseButton,
} from "./styles";

function Modal({ modalHandler }) {
  return ReactDom.createPortal(
    <>
      <ModalBox>
        <CloseButton onClick={() => modalHandler()}>닫기</CloseButton>
        <img src="../daisso.jpeg" width="75" height="75" />
        <SignupForm>
          <SignupFormField placeholder="아이디" />
          <DoubleCheckButton>중복확인</DoubleCheckButton>
          <SignupFormField placeholder="닉네임" />
          <DoubleCheckButton>중복확인</DoubleCheckButton>
          <SignupFormField placeholder="비밀번호" />
          <SignupFormField placeholder="비밀번호 확인" />
        </SignupForm>
        <SignupButton>회원가입</SignupButton>
      </ModalBox>
    </>,
    document.getElementById("modal")
  );
}

export default Modal;
