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

export { HeaderDiv, HeaderLogo, HeaderRight, HeaderButton };
