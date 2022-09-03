import styled from "styled-components";

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

  float: left;
  position: relative;
`;

const HeaderLi = styled.div`
  list-style: none;
  line-height: 50px;
  background-color: #fafafa;
  padding: 5px 5px 5px 20px;
  box-shadow: 3px 3px 7px #cccccc;

  li:hover {
    color: #da3731;
    font-weight: bold;
  }
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

export { HeaderDiv, HeaderLogo, HeaderRight, HeaderUl, HeaderLi, HeaderButton };
