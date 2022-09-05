import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
import ReviewHeader from "../header/Header";
import useBoardInput from "../../../hooks/useBoardInput";
import { FaStar } from "react-icons/fa";
import {
  Container,
  ParentContainer,
  ChildContainer,
  ElementBox,
  ElementBoxStyle,
  TextStyle,
  FormField,
  ReviewTextArea,
  Stars,
  ImageInput,
  ButtonStyle,
} from "./styles";
import useInput from "../../../hooks/useInput";
import useImageInput from "../../../hooks/useImageInput";

function PostReview() {
  return (
    <>
      <Layout children={<PostReviewComponent />} />
      {/* <ReviewHeader children={<EditReviewComponent />} /> */}
    </>
  );
}

function PostReviewComponent() {
  const array = [0, 1, 2, 3, 4];
  const [star, setStar] = useState([false, false, false, false, false]);

  const handleStarClick = (index) => {
    let starStatus = [...star];
    for (let i = 0; i < starStatus.length; i++) {
      if (i <= index) {
        starStatus[i] = true;
      } else {
        starStatus[i] = false;
      }
    }
    setStar(starStatus);
  };

  const [productUrl, setProductUrl, onChangeProductUrl] = useInput();
  const [content, setContent, onChangeContent] = useInput();
  const [image, setImage, imageUrl, setImageUrl, onChangeImage] =
    useImageInput();

  useEffect(() => {}, []);

  const onHandleClick = () => {
    const formData = new FormData();
    formData.append("imageUrl", image);
    formData.append("productUrl", productUrl);
    formData.append("content", content);
    formData.append("star", star);

    for (let value of formData.values()) {
      // 값 확인
      console.log("formdata", value);
    }
  };
  console.log(onHandleClick());

  return (
    <Container>
      <ParentContainer>
        <ChildContainer>
          <ElementBox>
            <TextStyle>제품링크</TextStyle>
            <FormField
              placeholder="제품 url을 입력하세요"
              name="productUrl"
              value={productUrl}
              onChange={onChangeProductUrl}
            />
          </ElementBox>
          <ElementBox height="65px">
            <TextStyle>별점</TextStyle>
            <Stars>
              {array.map((i, idx) => {
                return (
                  <FaStar
                    key={idx}
                    size="25"
                    onClick={() => handleStarClick(i)}
                    className={star[i] && "yellowStar"}
                  />
                );
              })}
            </Stars>
          </ElementBox>
          <ReviewTextArea
            placeholder="구매후기"
            name="content"
            value={content}
            onChange={onChangeContent}
          />
          <ElementBox height="300px" block="inline-block">
            <TextStyle>사진첨부</TextStyle>
            <ImageInput type="file" name="imageUrl" onChange={onChangeImage} />
            {image && (
              <img
                className="image-box"
                src={imageUrl}
                style={{ margin: "10px 0px 0px 100px" }}
                height="150"
                width="230"
              />
            )}
          </ElementBox>
          <ElementBoxStyle direction="center" block="flex">
            <ButtonStyle>작성하기</ButtonStyle>
            <ButtonStyle>취소</ButtonStyle>
          </ElementBoxStyle>
        </ChildContainer>
      </ParentContainer>
    </Container>
  );
}

export default PostReview;
