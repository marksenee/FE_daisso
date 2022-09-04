import React, { useState } from "react";
import ReactDom from "react-dom";
import { useNavigate } from "react-router-dom";
import useUserIdValidationCheck from "../../hooks/useEmailValidation";
import {
  ModalBox,
  SignupForm,
  SignupFormField,
  DoubleCheckButton,
  SignupButton,
  CloseButton,
  Background,
} from "./styles";

function Modal({ modalHandler }) {
  const [userId, setUserId] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 유효성 체크 확인
  const [isUserId, setIsUserId] = useState(false);

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onChangePasswordConfirm = (e) => {
    setPasswordConfirm(e.target.value);
  };

  let body = {
    userId,
    nickName,
    password,
    passwordConfirm,
  };

  // 유효성 검사
  const userIdValidation = useUserIdValidationCheck();
  const userIdValidationCheck = () => {
    if (!userIdValidation) {
      alert("이메일을 다시 입력해주세요");
      setIsUserId(false);
    } else {
      setIsUserId(true);
    }
  };

  return ReactDom.createPortal(
    <Background>
      <ModalBox>
        <CloseButton onClick={() => modalHandler()}>닫기</CloseButton>
        <img src="../daisso.jpeg" width="75" height="75" />
        <SignupForm>
          <SignupFormField
            placeholder="아이디"
            value={userId}
            onChange={onChangeUserId}
          />
          <DoubleCheckButton onClick={() => userIdValidationCheck(userId)}>
            중복확인
          </DoubleCheckButton>
          <SignupFormField
            placeholder="닉네임"
            value={nickName}
            onChange={onChangeNickName}
          />
          <DoubleCheckButton>중복확인</DoubleCheckButton>
          <SignupFormField
            placeholder="비밀번호"
            value={password}
            onChange={onChangePassword}
          />
          <SignupFormField
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            onChange={onChangePasswordConfirm}
          />
        </SignupForm>
        <SignupButton>회원가입</SignupButton>
      </ModalBox>
    </Background>,
    document.getElementById("modal")
  );
}

export default Modal;
