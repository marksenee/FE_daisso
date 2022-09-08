import React, { useEffect, useState } from "react";
import axios from "axios";
import { getCookie } from "../../utils/Cookie";
import { PostDiv } from "./styles";
import Mypost from "./Mypost";

function Myposts() {
  const REACT_APP_API_MYPOST_URL = `http://15.164.224.94/api/auth/mypage/`;
  const [mypost, setMypost] = useState();

  const fetchMypost = async () => {
    try {
      const access = getCookie("access_token");
      const refresh = getCookie("refresh_token");
      axios.defaults.headers.common["authorization"] = access;
      axios.defaults.headers.common["refresh-token"] = refresh;

      const { data } = await axios.get(REACT_APP_API_MYPOST_URL);
      return setMypost(data);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    fetchMypost();
  }, []);

  const mypostList = mypost?.data.postList;

  return (
    <PostDiv>
      {mypostList?.map((mypost) => (
        <Mypost mypost={mypost} key={mypost.id} />
      ))}
    </PostDiv>
  );
}

export default Myposts;
