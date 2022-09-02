import React from "react";
import styled from "styled-components";

function Main() {
  return (
    <MainDiv>
      <MainLeft>
        <MainH1>
          다이소 리뷰 사이트{" "}
          <span
            style={{ color: "#da3731", fontWeight: "800", marginLeft: "5px" }}
          >
            daisso
          </span>
        </MainH1>
        <MainP>리뷰 쓰고 다이소 꿀템을 공유해요</MainP>
        <MainBtn>다이소몰 가기</MainBtn>
        <MainBtn>리뷰 작성하기</MainBtn>
      </MainLeft>
      <img src="../mainimage.png" width="460" height="330" />
    </MainDiv>
  );
}

export default Main;

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
