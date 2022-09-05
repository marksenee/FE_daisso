import styled, { keyframes } from "styled-components";

const HeaderDiv = styled.div`
  border-bottom: 1.5px solid #da3731;

  display: flex;
  padding: 10px 40px 0px 40px;
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

const HeaderUl = styled.ul`
  list-style: none;
  height: 50px;
  line-height: 50px;
  margin: 0 auto;
  text-align: left;
  align-items: center;
  display: flex; //DESC: UL과 아이콘 나란히 정렬

  float: left;
  position: relative;
`;

const HeaderLi = styled.div`
  list-style: none;
  line-height: 50px;
  background-color: #fafafa;
  padding: 5px 5px 5px 20px;
  box-shadow: 3px 3px 7px #cccccc;
  position: absolute;
  right: 0%;
  top: 100%;
  width: 100px;
  height: 100px; //DESC: position~height Dropdown 위치 설정

  li:hover {
    color: #da3731;
    font-weight: bold;
  }
`;

const HeaderButton = styled.button`
  background-color: white;
  border-style: solid;
  border-color: white;
  font-size: 18px;
  color: black;

  &:hover {
    color: #616161;
  }
`;

const LogoutButton = styled.button`
  font-size: 16px;
  color: #424242;
  border-style: solid;
  border-color: transparent;
  background-color: transparent;
  margin-left: -8px;
`;

const AniUp = keyframes`
  0% {
    transform:rotate(0deg);
  }
  100%{
    transform:rotate(180deg);
  }
`;

const AniDown = keyframes`
  0% {
    transform:rotate(180deg);
  }
  100%{
    transform:rotate(0deg);
  }
`;

const Animation1 = styled.span`
  animation: ${AniDown} 0.35s linear forwards;
`;

const Animation2 = styled.span`
  animation: ${AniUp} 0.35s linear forwards;
`;

export {
  HeaderDiv,
  HeaderLogo,
  HeaderRight,
  HeaderUl,
  HeaderLi,
  HeaderButton,
  LogoutButton,
  Animation1,
  Animation2,
};
