import React from "react";
import { useNavigate } from "react-router-dom";
import { PostBox, PostContent } from "./styles";

function Post({ eachpost }) {
  const navigate = useNavigate();
  return (
    <PostBox
      onClick={() => {
        navigate(`/post/${eachpost.id}`);
      }}
    >
      <PostContent>
        <img src={eachpost.productImg} width="200" height="200" />
        <p>{eachpost.productName}</p>
        <div>{eachpost.star}</div>
      </PostContent>
    </PostBox>
  );
}

export default Post;
