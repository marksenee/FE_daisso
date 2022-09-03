import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HeaderDiv, HeaderLogo, HeaderRight, HeaderButton } from "./styles";
import SingupModal from "../signup/SignUpModal";
import useShowModal from "../../hooks/useShowModal";

function Header() {
  const navigate = useNavigate();
  const [isModal, ModalHandler] = useShowModal();

  return (
    <HeaderDiv>
      <HeaderLogo>
        <img src="../daisso.jpeg" width="75" height="75" />
      </HeaderLogo>
      <HeaderRight>
        <HeaderButton onClick={() => navigate(`/login`)}>로그인</HeaderButton>
        <HeaderButton onClick={() => ModalHandler()}>회원가입</HeaderButton>
        <SingupModal show={isModal} modalHandler={ModalHandler} />
      </HeaderRight>
    </HeaderDiv>
  );
}

export default Header;
