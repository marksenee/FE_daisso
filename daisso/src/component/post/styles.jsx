import styled from "styled-components";

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

export { PostDiv, PostBox, PostContent };
