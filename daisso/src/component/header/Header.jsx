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
import { useSelector } from "react-redux";

function Header() {
  const navigate = useNavigate();
  const [view, setView] = useState(false);
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
            반가워요, nickName 님!{" "}
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
