import styled from "styled-components";

const ModalBox = styled.div`
  position: absolute;
  width: 650px;
  height: 520px;
  background-color: white;
  border-style: solid;
  border-color: #ddd;
  border-radius: 10px;
  display: flex;
  left: 50%;
  top: 100px;
  transform: translate(-50%, 70px);
  margin: auto;

  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SignupForm = styled.div`
  width: 380px;
  height: 250px;
  background-color: white;
  display: inline-block;
  margin: 15px 0px 10px 70px;
`;

const SignupFormField = styled.input`
  width: 250px;
  height: 40px;
  padding-left: 10px;
  border-style: solid;
  border-radius: 10px;
  border-color: #ddd;
  margin: 5px 5px 5px 15px;
`;

const DoubleCheckButton = styled.button`
  width: 70px;
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

const SignupButton = styled.button`
  width: 100px;
  height: 40px;
  /* background-color: #616161; */
  background-color: ${(props) => (props.disabled ? "#616161" : "red")};
  color: white;
  border-style: solid;
  border-radius: 10px;
  border-color: transparent;
  margin: 5px 10px 10px 10px;

  &:hover {
    background-color: #e0e0e0;
    color: black;
  }
`;
function SignupButtonStyle({ disabled, ...rest }) {
  return <SignupButton disabled={disabled} {...rest}></SignupButton>;
}

const CloseButton = styled.button`
  width: 50px;
  height: 40px;
  position: relative;
  left: -40%;
  transform: translate(-70%, -70%);

  background-color: white;
  color: #616161;
  border-style: solid;
  border-radius: 10px;
  border-color: transparent;
  margin: 5px 10px 10px 10px;

  &:hover {
    color: black;
  }
`;

const ModalBackground = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-color: rgba(102, 100, 100, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 0;
`;

const PasswordMessage = styled.span`
  /* width: 250px; */
  font-size: 11px;
  color: red;
  display: flex;
  margin-left: 20px;
`;

export {
  ModalBackground,
  ModalBox,
  SignupForm,
  SignupFormField,
  DoubleCheckButton,
  SignupButton,
  CloseButton,
  Background,
  PasswordMessage,
  SignupButtonStyle,
};
