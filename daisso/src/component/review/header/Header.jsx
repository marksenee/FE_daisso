import React from "react";
import DropDownMenu from "../dropDown/DropDown";
import useShowModal from "../../../hooks/useShowModal";
import {
  HeaderDiv,
  HeaderLogo,
  HeaderRight,
  HeaderButton,
  HeaderContainer,
  MenuButton,
} from "./styles";

function ReviewHeader() {
  const [isMenu, onHandler] = useShowModal();

  return (
    <>
      <HeaderDiv>
        <HeaderContainer>
          <MenuButton onClick={() => onHandler()}>
            <img src="../menu.png" width="30" height="30" />
            {isMenu ? <DropDownMenu showMenu={isMenu} /> : null}
          </MenuButton>
          <HeaderLogo>
            <img src="../daisso.jpeg" width="75" height="75" />
          </HeaderLogo>
        </HeaderContainer>
        <HeaderRight>
          <HeaderButton>마이페이지</HeaderButton>
        </HeaderRight>
      </HeaderDiv>
    </>
  );
}

export default ReviewHeader;
