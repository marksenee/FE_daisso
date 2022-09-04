import styled from "styled-components";

const HeaderDiv = styled.div`
  border-bottom: 1.5px solid #da3731;

  display: flex;
  margin: 5px 10px 0px 10px;
  justify-content: space-between;
`;

const HeaderLogo = styled.h1`
  color: #da3731;
  margin: 5px 5px 5px 5px;
  font-weight: 800;
  /* letter-spacing: -1px; */
`;

const HeaderRight = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;
  align-items: center;
  color: #464646;
`;

const HeaderButton = styled.button`
  background-color: white;
  border-style: solid;
  border-color: white;
  font-size: 17px;
  color: black;

  &:hover {
    color: #616161;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  float: left;
`;

const MenuButton = styled.button`
  width: 50px;
  height: 70px;
  background-color: white;
  border-style: solid;
  border-color: white;
  margin: 10px 10px 0px 0px;

  &:hover {
    background-color: #ddd;
  }
`;

export {
  HeaderDiv,
  HeaderLogo,
  HeaderRight,
  HeaderButton,
  HeaderContainer,
  MenuButton,
};
