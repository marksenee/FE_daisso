import styled from "styled-components";

const FooterDiv = styled.div`
  height: 160px;
  margin-top: 100px;
  padding: 27px 0px 0px 50px;
  display: flex;
  justify-content: space-between;

  background: linear-gradient(240deg, #d3d3d3cd, #ffffff, #ff6b6888);
`;

const FooterLeft = styled.div``;

const FooterRight = styled.div`
  padding: 25px 50px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { FooterDiv, FooterLeft, FooterRight };
