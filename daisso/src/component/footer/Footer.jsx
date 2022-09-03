import React from "react";
import { FooterDiv, FooterLeft, FooterRight } from "./styles";

function Footer() {
  return (
    <FooterDiv>
      <FooterLeft>
        <img src="../daisso.jpeg" width="75" height="75" />
        <h3 style={{ marginBottom: "0px", fontSize: "1.08em" }}>
          frontend 박세은 차혜인 | backend 이소현 정수민
        </h3>
        <p style={{ marginTop: "5px" }}>innovation camp in seoul 2022</p>
      </FooterLeft>
      <FooterRight>
        <img
          src="../youtubelogo.png"
          width="50"
          height="35"
          style={{ marginBottom: "30px" }}
        />
        <img src="../githublogo.png" width="120" height="27" />
      </FooterRight>
    </FooterDiv>
  );
}

export default Footer;
