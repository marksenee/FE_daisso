import styled from "styled-components";

const DropDownContainer = styled.div`
  width: 200px;
  height: 200px;
  background-color: white;

  border-style: solid;
  border-radius: 5px;
  border-color: #ddd;
  border-width: 0.5px;

  position: absolute;
  left: 10px;
  top: 100px;
  transform: translate(-10px, -20px);
`;

const DropDownItemButton = styled.button`
  width: 180px;
  height: 30px;
  background-color: white;

  border-style: solid;
  border-color: transparent;

  font-size: 16px;

  display: flex;
  justify-content: center;
  margin: 8px 10px 0px 10px;
  padding-top: 5px;

  &:hover {
    background-color: #eeeeee;
  }
`;

export { DropDownContainer, DropDownItemButton };
