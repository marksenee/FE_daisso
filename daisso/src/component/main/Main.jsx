import React from "react";
import { MainDiv, MainLeft, MainH1, MainP, MainBtn } from "./styles";

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
      <img src="../mainimage.png" alt="main" width="460" height="330" />
    </MainDiv>
  );
}

export default Main;
