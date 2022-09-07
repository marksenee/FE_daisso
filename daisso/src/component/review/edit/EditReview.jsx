import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Layout from "../../layout/Layout";
import ReviewHeader from "../header/Header";
import useInput from "../../../hooks/useInput";
import useImageInput from "../../../hooks/useImageInput";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
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
} from "../addPost/styles";
import { useDispatch, useSelector } from "react-redux";
import { __getDetailBoard, __updateBoard } from "../../../redux/modules/board";
import { useParams } from "react-router-dom";

function EditReview() {
  return (
    <>
      <Header />
      <EditReviewComponent />
      <Footer />
    </>
  );
}

function EditReviewComponent() {
  const { board } = useSelector((state) => state.board);

  const dispatch = useDispatch();
  const param = useParams();
  const postId = Number(param.id);

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

  // const [productUrl, setProductUrl, onChangeProductUrl] = useInput(
  //   board.productUrl
  // );

  /* useState */
  const [productUrl, setProductUrl] = useState(board.productUrl);
  const [content, setContent, onChangeContent] = useInput(board.content);
  const [image, setImage, imageUrl, setImageUrl, onChangeImage] = useImageInput(
    board.imageUrl
  );

  useEffect(() => {
    dispatch(__getDetailBoard(postId));
  }, [dispatch]);

  const onHandleClick = (id) => {
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

    dispatch(__updateBoard({ id, formData }));
    // for (let value of formData.values()) {
    //   // 값 확인
    //   console.log("formdata", value);
    // }
  };

  return (
    <Container>
      <ParentContainer>
        <ChildContainer>
          <ElementBox>
            <TextStyle>제품링크</TextStyle>
            <FormField
              defaultValue={board.productUrl}
              onChange={(event) => setProductUrl(event.target.value)}
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
            placeholder={board.content}
            name="content"
            value={content}
            onChange={onChangeContent}
          />
          <ElementBox height="300px" block="inline-block">
            <TextStyle>사진첨부</TextStyle>
            <ImageInput type="file" name="imageUrl" onChange={onChangeImage} />
            {/* {!board.imageUrl ? (
              <img
                src={board.imageUrl}
                style={{ margin: "10px 0px 0px 100px" }}
                height="150"
                width="230"
              />
            ) : (
              <>
                {" "}
                {image && (
                  <img
                    className="image-box"
                    src={imageUrl}
                    style={{ margin: "10px 0px 0px 100px" }}
                    height="150"
                    width="230"
                  />
                )}
              </>
            )} */}
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
            <ButtonStyle onClick={() => onHandleClick(postId)}>
              수정하기
            </ButtonStyle>
            <ButtonStyle>취소</ButtonStyle>
          </ElementBoxStyle>
        </ChildContainer>
      </ParentContainer>
    </Container>
  );
}

export default EditReview;
