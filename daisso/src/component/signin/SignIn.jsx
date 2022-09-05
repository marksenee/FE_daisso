import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import SingupModal from "../signup/SignUpModal";
import useShowModal from "../../hooks/useShowModal";
import { __getUser } from "../../redux/modules/users";
import {
  ContainerStyle,
  LoginContainer,
  LoginFormField,
  ButtonContainer,
  ButtonElement,
  LogoButton,
} from "./styles";
import { useLocation, useNavigate } from "react-router-dom";
import useInput from "../../hooks/useInput";
import useToken from "../../hooks/useToken";

function SignIn() {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { pathname } = useLocation();
  const token = useToken();

  const [isModal, ModalHandler] = useShowModal();
  const [userId, setUserId, onChange] = useInput();
  const [password, setPassword, onChangePassword] = useInput();

  const { users } = useSelector((state) => state.users);

  const onClickLogin = (userId, password) => {
    console.log("password", password);
    if (userId === "" || password === "") {
      alert("아이디와 비밀번호를 입력하세요");
    } else {
      dispatch(__getUser({ userId, password })).then((res) => {
        if (res.payload === "success") {
          alert("로그인 성공");
          navigate(`/`);
        } else if (res.payload === "checkPassword") {
          alert("비밀번호 확인");
        } else {
          alert("사용자 정보가 없습니다.");
        }
      });
    }
  };

  useEffect(() => {}, [dispatch]);

  return (
    <>
      <ContainerStyle>
        <LogoButton onClick={() => navigate(`/`)}>
          <img src="../daisso.jpeg" width="75" height="75" />
        </LogoButton>
        <LoginContainer>
          <LoginFormField
            placeholder="아이디"
            title="userId"
            value={userId}
            onChange={onChange}
          />
          <LoginFormField
            placeholder="비밀번호"
            title="password"
            value={password}
            type="password"
            onChange={onChangePassword}
          />
          <ButtonContainer>
            <ButtonElement onClick={() => onClickLogin(userId, password)}>
              로그인
            </ButtonElement>
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
