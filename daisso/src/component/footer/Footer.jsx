import React from "react";
import { FooterDiv, FooterLeft, FooterRight } from "./styles";

function Footer() {
  const github =
    "https://github.com/orgs/innovation-W6-miniproject/repositories";
  const onClickUrlHandler = () => {
    window.open(github);
  };

  return (
    <FooterDiv>
      <FooterLeft>
        <img
          src={process.env.PUBLIC_URL + "/daisso.jpeg"}
          alt="logo"
          width="70"
          height="70"
        />
        <h3 style={{ marginBottom: "0px", fontSize: "1em" }}>
          frontend 박세은 차혜인 | backend 이소현 정수민
        </h3>
        <p style={{ marginTop: "5px" }}>innovation camp in seoul 2022</p>
      </FooterLeft>
      <FooterRight>
        <img
          src={process.env.PUBLIC_URL + "/youtubelogo.png"}
          alt="youtubelogo"
          width="48"
          height="33"
          style={{ marginBottom: "30px" }}
        />
        <img
          src={process.env.PUBLIC_URL + "/githublogo.png"}
          onClick={onClickUrlHandler}
          alt="githublogo"
          width="117"
          height="27"
        />
      </FooterRight>
    </FooterDiv>
  );
}

export default Footer;
