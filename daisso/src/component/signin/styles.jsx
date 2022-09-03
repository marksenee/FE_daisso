import styled from "styled-components";

const ContainerStyle = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;

  position: absolute;
  left: 50%;
  top: 100px;
  transform: translate(-50%, 80px);
  margin: auto;
  flex-direction: column;

  border-style: solid;
  border-color: #ddd;
  border-radius: 10px;
`;

const LoginContainer = styled.div`
  width: 300px;
  height: 200px;
  margin: 30px 0px 20px 0px;
`;

const LoginFormField = styled.input`
  width: 250px;
  height: 40px;
  padding-left: 10px;
  border-style: solid;
  border-radius: 10px;
  border-color: #ddd;
  margin: 10px 20px 5px 20px;
`;

const ButtonContainer = styled.div`
  margin: 10px 10px 10px 25px;
`;

const ButtonElement = styled.button`
  width: 120px;
  height: 40px;
  justify-content: center;
  background-color: #e0e0e0;
  border-style: solid;
  border-radius: 10px;
  border-color: transparent;
  margin: 10px 10px 10px 0px;

  &:hover {
    background-color: #616161;
    color: white;
  }
`;

export {
  ContainerStyle,
  LoginContainer,
  LoginFormField,
  ButtonContainer,
  ButtonElement,
};
