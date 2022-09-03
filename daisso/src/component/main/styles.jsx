import styled from "styled-components";

const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f6f6f6;
  padding: 45px 10px 45px 0px;
  margin: 0px 0px 20px 0px;
`;

const MainLeft = styled.div`
  margin: 0px 0px 0px 50px;
`;

const MainH1 = styled.h1`
  margin: 0px 0px 10px 0px;
`;

const MainP = styled.p`
  margin-top: 0px;
  font-size: 1.2em;
`;

const MainBtn = styled.button`
  width: 120px;
  height: 43px;
  border-radius: 5px;
  border: none;
  margin: 20px 22px 0px 0px;
  background-color: #da3731ea;
  color: white;
  font-weight: bolder;
  font-size: 0.9em;
  box-shadow: 5px 5px 15px #969696;

  &:hover {
    background-color: #c61812;
    border: 2px solid #da3731;
    color: white;
  }
`;

export { MainDiv, MainLeft, MainH1, MainP, MainBtn };
