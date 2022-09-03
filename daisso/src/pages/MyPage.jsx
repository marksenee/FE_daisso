import React from "react";
import Layout from "../component/layout/Layout";
import Post from "../component/post/Post";

function MyPage() {
  return (
    <Layout>
      <div>
        <h2 style={{ margin: "30px 0px 20px 20px" }}>내가 작성한 리뷰</h2>
        <Post />
      </div>
      <div>
        <h2 style={{ margin: "30px 0px 20px 20px" }}>내가 좋아요한 리뷰</h2>
        <Post />
      </div>
    </Layout>
  );
}

export default MyPage;
