import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/postSlice";
import Post from "./Post";
import { PostDiv, PostBox, PostContent } from "./styles";

function Posts() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { success, error, post } = useSelector((state) => state.post);
  console.log(post);

  useEffect(() => {
    dispatch(__getPost());
  }, []);

  return (
    <>
      <h2>최근 등록된 리뷰</h2>
      <PostDiv>
        {post.map((eachpost) => {
          <Post eachpost={eachpost} key={eachpost.id} />;
        })}
      </PostDiv>
    </>
  );
}

export default Posts;
