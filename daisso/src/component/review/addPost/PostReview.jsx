import React, { useEffect, useState } from "react";
import Layout from "../../layout/Layout";
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
import { __createBoard } from "../../../redux/modules/board";
import { useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function PostReview() {
  return (
    <>
      <Layout children={<PostReviewComponent />} />
    </>
  );
}

function PostReviewComponent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const array = [0, 1, 2, 3, 4];
  const [star, setStar] = useState([false, false, false, false, false]);
  const [starIndex, setStarIndex] = useState(0);

  const handleStarClick = (index) => {
    let starStatus = [...star];
    setStarIndex(index + 1);
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
    formData.append("multipartFile", image);
    const obj = {
      productUrl: productUrl,
      productName: "test",
      star: starIndex,
      content: content,
    };
    formData.append(
      "requestDto",
      new Blob([JSON.stringify(obj)], {
        type: "application/json",
      })
    );

    // for (let value of formData.values()) {
    //   // 값 확인
    //   console.log("formdata", value);
    // }
    dispatch(__createBoard(formData)).then((res) => {
      if (res.payload.success) {
        alert("게시글 등록 완료!");
        navigate("/");
      } else {
        alert("게시글 등록 실패!");
      }
    });
  };

  const goBack = () => {
    window.history.back();
  };

  return (
    <Container>
      <ParentContainer>
        <ChildContainer>
          <h3 style={{ margin: "0px 0px 10px 20px" }}>게시글 등록</h3>
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
            <ButtonStyle onClick={() => onHandleClick()}>작성하기</ButtonStyle>
            <ButtonStyle onClick={() => goBack()}>취소</ButtonStyle>
          </ElementBoxStyle>
        </ChildContainer>
      </ParentContainer>
    </Container>
  );
}

export default PostReview;
