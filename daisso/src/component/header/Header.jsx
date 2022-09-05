import React, { useState } from "react";
import Dropdown from "./Dropdown";
import {
  HeaderDiv,
  HeaderLogo,
  HeaderRight,
  HeaderUl,
  HeaderButton,
  Animation1,
  Animation2,
} from "./styles";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { useNavigate } from "react-router-dom";
import SingupModal from "../signup/SignUpModal";
import useShowModal from "../../hooks/useShowModal";
import useToken from "../../hooks/useToken";
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const [view, setView] = useState(null);
  const [isModal, ModalHandler] = useShowModal();
  // token
  const token = useToken();

  // 새로고침되면 데이터가 사라짐, dispatch로 계속 db에서 userId를 가져오는 로직을 구현해서
  // 해당 로직을 리덕스로 돌리고, 리덕스 스토어에 저장해서 불러와야 함
  const { users } = useSelector((state) => state.users);
  // const { userId } = users[0];
  // console.log("userss", userId);

  return (
    <HeaderDiv>
      <HeaderLogo onClick={() => navigate("/")}>
        <img src="../daisso.jpeg" alt="logo" width="75" height="75" />
      </HeaderLogo>
      <HeaderRight>
        {!token ? (
          <>
            {" "}
            <HeaderButton onClick={() => navigate(`/login`)}>로그인</HeaderButton>
            <HeaderButton onClick={() => ModalHandler()}>회원가입</HeaderButton>
            <SingupModal show={isModal} modalHandler={ModalHandler} />
          </>
        ) : (
          <HeaderUl
            onClick={() => {
              setView((prev) => {
                return !prev ? true : false;
              });
            }}
          >
            반가워요, nickName 님!{" "}
            {view === null && (
              <div>
                <KeyboardArrowDownIcon viewBox="0 -7 24 24" />
              </div>
            )}
            {view && (
              <>
                <Animation1>
                  <div>
                    <KeyboardArrowUpIcon viewBox="0 -5 24 24" />
                  </div>
                </Animation1>
                <Dropdown />
              </>
            )}
            {view === false && (
              <Animation2>
                <div>
                  <KeyboardArrowUpIcon viewBox="0 -5 24 24" />
                </div>
              </Animation2>
            )}
          </HeaderUl>
        )}
      </HeaderRight>
    </HeaderDiv>
  );
}

export default Header;
