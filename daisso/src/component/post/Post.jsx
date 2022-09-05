import React from "react";
import { PostBox, PostContent } from "./styles";

function Post({ eachpost }) {
  return (
    <PostBox>
      <PostContent>
        <img src={eachpost.productImg} width="200" height="200" />
        <p>{eachpost.productName}</p>
        <div>{eachpost.star}</div>
      </PostContent>
    </PostBox>
  );
}

export default Post;
