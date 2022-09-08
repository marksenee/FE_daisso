import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
import { PostDiv } from "./styles";
import LikePost from "./LikePost";

function LikePosts() {
  const REACT_APP_API_LIKEPOST_URL = `http://15.164.224.94/api/auth/mypage/like`;
  const [likePost, setLikePost] = useState();

  const fetchlikePost = async () => {
    try {
      const access = getCookie("access_token");
      const refresh = getCookie("refresh_token");
      axios.defaults.headers.common["authorization"] = access;
      axios.defaults.headers.common["refresh-token"] = refresh;

      const { data } = await axios.get(REACT_APP_API_LIKEPOST_URL);
      return setLikePost(data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchlikePost();
  }, []);

  const likePostList = likePost?.data.postLikesList;

  console.log(likePostList);

  return (
    <PostDiv>
      {likePostList?.map((likepost) => (
        <LikePost likepost={likepost} key={likepost.id} />
      ))}
    </PostDiv>
  );
}

export default LikePosts;
