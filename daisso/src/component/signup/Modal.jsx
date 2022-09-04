import axios from "axios";
import React, { useState, useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch } from "react-redux";
import { __createUsers } from "../../redux/modules/users";
import useUserIdValidationCheck from "../../hooks/useEmailValidation";
import {
  ModalBox,
  SignupForm,
  SignupFormField,
  DoubleCheckButton,
  SignupButton,
  CloseButton,
  Background,
  PasswordMessage,
} from "./styles";

function Modal({ modalHandler }) {
  const dispatch = useDispatch();

  const [userId, setUserId] = useState("");
  const [nickName, setNickName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 유효성 체크 확인
  const [isUserId, setIsUserId] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 오류 메세지
  const [userIdMessage, setUserIdMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const onChangeUserId = (e) => {
    setUserId(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  const onChangePasswordConfirm = (e) => {
    const passwordCheckValue = e.target.value;
    setPasswordConfirm(passwordCheckValue);
    if (password === passwordCheckValue) {
      // 현재 value로 받아와야 함
      setPasswordConfirmMessage("비밀번호가 일치해요");
      setIsPasswordConfirm(true);
    } else {
      setPasswordConfirmMessage("비밀번호가 달라요!");
      setIsPasswordConfirm(false);
    }
  };

  // 비밀번호
  const onChangePassword = useCallback((e) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!passwordRegex.test(passwordValue)) {
      setPasswordMessage("숫자+영문자+특수문자 조합으로 8자리 이상 입력하세요");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전해요");
      setIsPassword(true);
    }
  }, []);

  let body = {
    userId,
    nickName,
    password,
    passwordConfirm,
  };

  // 유효성 검사
  const userIdValidation = useUserIdValidationCheck(userId);

  const validationCheck = () => {
    if (!userIdValidation) {
      setUserIdMessage("이메일 형식을 확인하세요");
      setIsUserId(false);
    } else {
      setUserIdMessage(" ");
      setIsUserId(true);
    }
  };

  // 회원가입
  const onSubmitSignup = (data) => {
    dispatch(__createUsers(data));
    alert("회원가입이 완료되었습니다.");
    modalHandler();
  };

  useEffect(() => {}, [dispatch]);

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
          <DoubleCheckButton onClick={() => validationCheck()}>
            중복확인
          </DoubleCheckButton>
          {isUserId ? (
            <PasswordMessage>{userIdMessage}</PasswordMessage>
          ) : (
            <PasswordMessage>{userIdMessage}</PasswordMessage>
          )}
          <SignupFormField
            placeholder="닉네임"
            value={nickName}
            onChange={onChangeNickName}
          />
          <DoubleCheckButton>중복확인</DoubleCheckButton>
          <SignupFormField
            placeholder="비밀번호"
            value={password}
            type="password"
            onChange={onChangePassword}
          />
          {isPassword ? (
            <PasswordMessage>{passwordMessage}</PasswordMessage>
          ) : (
            <PasswordMessage>{passwordMessage}</PasswordMessage>
          )}
          <SignupFormField
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            type="password"
            onChange={onChangePasswordConfirm}
          />
          {isPasswordConfirm ? (
            <PasswordMessage>{passwordConfirmMessage}</PasswordMessage>
          ) : (
            <PasswordMessage>{passwordConfirmMessage}</PasswordMessage>
          )}
        </SignupForm>
        {/* isNickName 추가해야 함*/}
        <SignupButton
          onClick={() => onSubmitSignup(body)}
          disabled={!(isUserId && isPassword && isPasswordConfirm)}
        >
          회원가입
        </SignupButton>
      </ModalBox>
    </Background>,
    document.getElementById("modal")
  );
}

export default Modal;
