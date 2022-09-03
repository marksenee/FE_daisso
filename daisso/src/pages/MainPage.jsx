import React from "react";
import Layout from "../component/layout/Layout";
import Main from "../component/main/Main";
import Post from "../component/post/Post";

function MainPage() {
  return (
    <Layout>
      <Main />
      <Post />
    </Layout>
  );
}

export default MainPage;
