import React from "react";
import { DropDownContainer, DropDownItemButton } from "./styles";

function DropDownMenu({ showMenu }) {
  const menuArray = ["메뉴1", "메뉴2", "메뉴3", "메뉴4", "메뉴5"];
  return (
    <DropDownContainer>
      {menuArray.map((item) => (
        <DropDownItemButton>{item}</DropDownItemButton>
      ))}
    </DropDownContainer>
  );
}

export default DropDownMenu;
