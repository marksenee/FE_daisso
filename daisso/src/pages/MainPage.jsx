import React from "react";
import Layout from "../component/layout/Layout";
import Main from "../component/main/Main";
import Posts from "../component/post/Posts";

function MainPage() {
  return (
    <Layout>
      <Main />
      <Posts />
    </Layout>
  );
}

export default MainPage;
