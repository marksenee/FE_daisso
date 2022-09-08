import React from "react";
import Layout from "../component/layout/Layout";
import Posts from "../component/post/Posts";
import LikePosts from "../component/post/LikePosts";
import Myposts from "../component/post/Myposts";

function MyPage() {
  return (
    <Layout>
      <div>
        <h2 style={{ margin: "30px 0px 20px 20px" }}>내가 작성한 리뷰</h2>
        <Myposts />
      </div>
      <div>
        <h2 style={{ margin: "30px 0px 20px 20px" }}>내가 좋아요한 리뷰</h2>
        <LikePosts />
      </div>
    </Layout>
  );
}

export default MyPage;
