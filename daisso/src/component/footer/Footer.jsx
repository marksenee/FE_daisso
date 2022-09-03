import React from "react";
import { FooterDiv, FooterLeft, FooterRight } from "./styles";

function Footer() {
  return (
    <FooterDiv>
      <FooterLeft>
        <img src="../daisso.jpeg" alt="logo" width="70" height="70" />
        <h3 style={{ marginBottom: "0px", fontSize: "1em" }}>
          frontend 박세은 차혜인 | backend 이소현 정수민
        </h3>
        <p style={{ marginTop: "5px" }}>innovation camp in seoul 2022</p>
      </FooterLeft>
      <FooterRight>
        <img
          src="../youtubelogo.png"
          alt="youtubelogo"
          width="48"
          height="33"
          style={{ marginBottom: "30px" }}
        />
        <img src="../githublogo.png" alt="githublogo" width="117" height="27" />
      </FooterRight>
    </FooterDiv>
  );
}

export default Footer;
