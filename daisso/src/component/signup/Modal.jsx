import React, { useState, useCallback, useEffect } from "react";
import ReactDom from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { __createUsers, __doubleCheck } from "../../redux/modules/users";
import useInput from "../../hooks/useInput";
import {
  ModalBox,
  SignupForm,
  SignupFormField,
  DoubleCheckButton,
  SignupButton,
  CloseButton,
  Background,
  Message,
} from "./styles";

function Modal({ modalHandler }) {
  const dispatch = useDispatch();

  const [userId, setUserId, onChangeUserId] = useInput();
  const [nickname, setNickName, onChangeNickName] = useInput();
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  // 유효성 체크 확인
  const [isUserId, setIsUserId] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [isPassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);

  // 오류 메세지
  const [userIdMessage, setUserIdMessage] = useState("");
  const [nickNameMessage, setNickNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");

  const { users } = useSelector((state) => state.users);
  console.log("users", users);

  //  [중복확인]
  const testDoubleCheck = (
    data,
    setData,
    setDataMessage,
    setDataMessageDetail
  ) => {
    dispatch(__doubleCheck([{ userId: data }, "checkId"])).then((res) => {
      if (res.payload) {
        setData(true);
        setDataMessage(`사용가능한 ${setDataMessageDetail} 입니다.`);
      } else {
        setData(false);
        setDataMessage(`중복된 ${setDataMessageDetail} 입니다.`);
      }
    });
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
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/;
    const passwordValue = e.target.value;
    setPassword(passwordValue);

    if (!passwordRegex.test(passwordValue)) {
      setPasswordMessage("숫자+영문자 조합으로 8자리 이상 입력하세요");
      setIsPassword(false);
    } else {
      setPasswordMessage("안전해요");
      setIsPassword(true);
    }
  }, []);

  let body = {
    userId,
    nickname,
    password,
    passwordConfirm,
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
          <DoubleCheckButton
            onClick={() =>
              testDoubleCheck(userId, setIsUserId, setUserIdMessage, "아이디")
            }
          >
            중복확인
          </DoubleCheckButton>
          {isUserId ? (
            <Message>{userIdMessage}</Message>
          ) : (
            <Message>{userIdMessage}</Message>
          )}
          <SignupFormField
            placeholder="닉네임"
            value={nickname}
            onChange={onChangeNickName}
          />
          <DoubleCheckButton
            onClick={() =>
              testDoubleCheck(
                nickname,
                setIsNickName,
                setNickNameMessage,
                "닉네임"
              )
            }
          >
            중복확인
          </DoubleCheckButton>
          {isNickName ? (
            <Message>{nickNameMessage}</Message>
          ) : (
            <Message>{nickNameMessage}</Message>
          )}
          <SignupFormField
            placeholder="비밀번호"
            value={password}
            type="password"
            onChange={onChangePassword}
          />
          {isPassword ? (
            <Message>{passwordMessage}</Message>
          ) : (
            <Message>{passwordMessage}</Message>
          )}
          <SignupFormField
            placeholder="비밀번호 확인"
            value={passwordConfirm}
            type="password"
            onChange={onChangePasswordConfirm}
          />
          {isPasswordConfirm ? (
            <Message>{passwordConfirmMessage}</Message>
          ) : (
            <Message>{passwordConfirmMessage}</Message>
          )}
        </SignupForm>
        <SignupButton
          onClick={() => onSubmitSignup(body)}
          disabled={
            !(isUserId && isNickName && isPassword && isPasswordConfirm)
          }
        >
          회원가입
        </SignupButton>
      </ModalBox>
    </Background>,
    document.getElementById("modal")
  );
}

export default Modal;
