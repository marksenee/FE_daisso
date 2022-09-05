import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {
  HeaderDiv,
  HeaderLogo,
  HeaderRight,
  HeaderUl,
  HeaderButton,
} from "./styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import SingupModal from "../signup/SignUpModal";
import useShowModal from "../../hooks/useShowModal";
import useToken from "../../hooks/useToken";

function Header() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
  const [isModal, ModalHandler] = useShowModal();
  // token
  const token = useToken();

  return (
    <HeaderDiv>
      <HeaderLogo onClick={() => navigate("/")}>
        <img src="../daisso.jpeg" alt="logo" width="75" height="75" />
      </HeaderLogo>
      <HeaderRight>
        {/* TODO: 로그인 후 조건문 사용 */}
        {!token ? (
          <>
            {" "}
            <HeaderButton onClick={() => navigate(`/login`)}>
              로그인
            </HeaderButton>
            <HeaderButton onClick={() => ModalHandler()}>회원가입</HeaderButton>
            <SingupModal show={isModal} modalHandler={ModalHandler} />
          </>
        ) : (
          <HeaderUl
            onClick={() => {
              setView(!view);
            }}
          >
            반가워요, nickname 님!{" "}
            {view ? (
              <KeyboardArrowUpIcon
                viewBox="0 -5 24 24"
                style={{ marginLeft: "5px" }}
              />
            ) : (
              <KeyboardArrowDownIcon
                viewBox="0 -5 24 24"
                style={{ marginLeft: "5px" }}
              />
            )}
            {view && <Dropdown />}
          </HeaderUl>
        )}
      </HeaderRight>
    </HeaderDiv>
  );
}

export default Header;
