import React from "react";
import styled from "styled-components";

function PostModal() {
  return <ModalBox>PostModal</ModalBox>;
}

export default PostModal;

let ModalBox = styled.div`
  border: 1px solid lightgray;
  border-radius: 10px;
  background-color: white;

  z-index: 999;

  width: 700px;
  height: 600px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  padding: 40px 40px 30px 40px;
`;
