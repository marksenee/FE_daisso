import React from "react";
import { useNavigate } from "react-router-dom";
import { PostBox, PostContent } from "./styles";

function Mypost({ mypost }) {
  const navigate = useNavigate();
  const star = "⭐️".repeat(mypost.star);
  const productName = mypost.productName;
  const product = productName.replace(/\[.*?\]/g, "").replace(/\-.*/, "");

  return (
    <PostBox
      onClick={() => {
        navigate(`/post/${mypost.id}`);
      }}
    >
      <PostContent>
        <img src={mypost?.productImg} width="200" height="200" />
        {/* DESC: productName이 199px을 넘어갈 경우 ... 으로 표시하고 가운데 정렬 */}
        <p
          style={{
            width: "199px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "center",
          }}
        >
          {product}
        </p>
        <div>{star}</div>
      </PostContent>
    </PostBox>
  );
}

export default Mypost;
