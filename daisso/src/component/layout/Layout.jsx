import React from "react";
import styled from "styled-components";
import Header from "../header/Header";
import Footer from "../footer/Footer";

const Layout = ({ children }) => {
  return (
    <LayoutLimit>
      <Header />
      <main>{children}</main>
      <Footer />
    </LayoutLimit>
  );
};

export default Layout;

const LayoutLimit = styled.div`
  min-width: 1000px;
`;
