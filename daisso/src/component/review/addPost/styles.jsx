import styled from "styled-components";

const Container = styled.div`
  height: 800px;
`;

const ParentContainer = styled.div`
  width: 650px;
  height: 700px;
  margin: auto;
  background-color: white;

  border-style: solid;
  border-radius: 10px;
  border-color: #da3731;
  border-width: 0.5px;

  position: absolute;
  left: 50%;
  top: 70px;
  transform: translate(-50%, 100px);
`;

const ChildContainer = styled.div`
  width: 500px;
  height: 600px;
  flex-direction: column;
  background-color: white;

  display: flex;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 40px;
  transform: translate(-50%, 10px);
`;

const ElementBox = styled.div`
  width: 450px;
  height: ${(props) => props.height};
  background-color: white;

  border-style: solid;
  border-radius: 5px;
  border-color: #ddd;
  border-width: 0.5px;
  margin: 10px 15px 10px 20px;

  display: ${(props) => props.block};
  justify-content: ${(props) => props.direction};
`;

function ElementBoxStyle({ children, direction, height, block, ...rest }) {
  return (
    <ElementBox direction={direction} height={height} block={block} {...rest}>
      {children}
    </ElementBox>
  );
}

const TextStyle = styled.span`
  font-size: 15px;
  font-weight: 600px;

  float: left;
  flex-direction: row;
  margin: 15px 0px 0px 15px;
`;

const FormField = styled.input`
  width: 350px;
  height: 30px;

  border-style: solid;
  border-radius: 5px;
  border-color: #ddd;

  padding-left: 10px;
  margin: 7px 10px 5px 5px;
`;

const ReviewTextArea = styled.textarea`
  width: 438px;
  height: 200px;
  display: flex;
  justify-content: center;
  position: relative;
  left: 20px;
  border-style: solid;
  border-color: #ddd;
  padding: 10px 0px 0px 10px;
  resize: none;
`;

const Stars = styled.div`
  display: inline-block;
  padding-top: 10px;
  margin-left: 10px;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #fcc419;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .yellowStar {
    color: #fcc419;
  }
`;

const ImageInput = styled.input`
  display: inline-block;
  margin: 8px 0px 0px 10px;
  padding-top: 5px;
`;

const ButtonStyle = styled.button`
  width: 100px;
  height: 40px;
  background-color: #e0e0e0;
  border-style: solid;
  border-radius: 10px;
  border-color: transparent;
  margin: 5px 10px 10px 10px;

  &:hover {
    background-color: #616161;
    color: white;
  }
`;

export {
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
};
