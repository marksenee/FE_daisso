import React from "react";
import styled from "styled-components";

function PostModal() {
  return (
    <ModalBack>
      <ModalBox>
        <ModalHeader>
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>걸이형 집게</div> <ModalLinkBtn>바로가기</ModalLinkBtn>
          </div>
          <div>𝐗</div>
        </ModalHeader>
        <ModalNickStar>
          <p>닉네임</p>
          <p>⭐️⭐️⭐️⭐️⭐️</p>
        </ModalNickStar>
        <ModalPhoto src="https://image2.daisomall.co.kr/data/daiso_data/images/product/00/04/47/08/99/b_0004470899.gif" />
        <ModalText>집게가 잘 집히고 어쩌구</ModalText>
        <ModalFooter>
          <div>
            <ModalBtn>수정</ModalBtn>
            <ModalBtn>삭제</ModalBtn>
          </div>
          <p style={{ fontSize: "1.4em", marginTop: "0px" }}>❤️</p>
        </ModalFooter>
      </ModalBox>
    </ModalBack>
  );
}

export default PostModal;

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 5px;
  background-color: white;
  z-index: 999;
  width: 500px;
  height: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px 40px 30px 40px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 0px 5px 0px;
  padding-bottom: 13px;
  border-bottom: 1.5px solid #da3731;
  font-size: 1.55em;
  font-weight: bold;
  align-items: center;
`;

const ModalNickStar = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.1em;
`;

const ModalPhoto = styled.img`
  width: 100%;
  height: 300px;
`;

const ModalLinkBtn = styled.button`
  width: 70px;
  height: 26px;
  border-radius: 5px;
  border: none;
  margin: 0px 0px 0px 10px;
  background-color: #da3731ea;
  color: white;
  font-weight: bolder;

  &:hover {
    background-color: #c61812;
    border: 2px solid #da3731;
    color: white;
  }
`;

const ModalText = styled.div`
  width: 99%;
  height: 220px;
  margin: 15px 0px 10px 0px;
`;

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ModalBtn = styled.button`
  width: 85px;
  height: 32px;
  border-radius: 5px;
  border: none;
  margin: 0px 18px 0px 0px;
  background-color: #cccccc;
  color: white;
  font-weight: bolder;
  box-shadow: 5px 5px 5px #e7e7e7;

  &:hover {
    color: #da3731;
  }
`;
