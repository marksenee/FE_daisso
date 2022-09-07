import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
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
  const [star, setStar] = useState(0);

  const changeNewStar = (newStar) => {
    setStar(newStar);
  };

  /* useState */
  const [productUrl, setProductUrl, onChangeProductUrl] = useInput();
  const [content, setContent, onChangeContent] = useInput();
  const [image, setImage, imageUrl, setImageUrl, onChangeImage] = useImageInput(
    board.imageUrl
  );

  useEffect(() => {
    dispatch(__getDetailBoard(postId)).then((res) => {
      const data = res.payload.data;
      setProductUrl(data.productUrl);
      setContent(data.content);
      setImageUrl(data.imageUrl);
      setStar(data.star);
    });
  }, [dispatch]);

  const onHandleClick = (id) => {
    const formData = new FormData();
    formData.append("multipartFile", image);
    const obj = {
      productUrl: productUrl,
      productName: "test",
      star: star,
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
              defaultValue={productUrl}
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
                    color={star >= i + 1 ? "#fcc419" : "grey"}
                    onClick={() => changeNewStar(i + 1)}
                  />
                );
              })}
            </Stars>
          </ElementBox>
          <ReviewTextArea
            name="content"
            defaultValue={content}
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
            {!image && (
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
