import React from "react";
import styled from "styled-components";

function Post() {
  return (
    <PostDiv>
      <PostBox>
        <PostContent>
          <img
            src="https://image2.daisomall.co.kr/data/daiso_data/images/product/00/05/33/91/53/b_0005339153.gif"
            width="200"
            height="200"
          />
          <p>대충 제품명</p>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
        </PostContent>
      </PostBox>
      <PostBox>
        <PostContent>
          <img
            src="https://image2.daisomall.co.kr/data/daiso_data/images/product/00/04/27/88/56/b_0004278856.gif"
            width="200"
            height="200"
          />
          <p>대충 제품명</p>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
        </PostContent>
      </PostBox>{" "}
      <PostBox>
        <PostContent>
          <img
            src="https://image2.daisomall.co.kr/data/daiso_data/images/product/00/04/47/08/99/b_0004470899.gif"
            width="200"
            height="200"
          />
          <p>대충 제품명</p>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
        </PostContent>
      </PostBox>{" "}
      <PostBox>
        <PostContent>
          <img
            src="https://image2.daisomall.co.kr/data/daiso_data/images/product/00/04/49/81/35/b_0004498135.gif"
            width="200"
            height="200"
          />
          <p>대충 제품명</p>
          <div>⭐️⭐️⭐️⭐️⭐️</div>
        </PostContent>
      </PostBox>
    </PostDiv>
  );
}

export default Post;

const PostDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: space-between;
  flex-wrap: wrap;
`;

const PostBox = styled.div`
  width: 230px;
  height: 300px;
  /* border: 2px double lightgrey; */
  margin: 5px 0px 10px 0px;
  border-radius: 5px;
  box-shadow: 3px 3px 7px #cccccc;
`;

const PostContent = styled.div`
  margin: 15px 5px 5px 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
