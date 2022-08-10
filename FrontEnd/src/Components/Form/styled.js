import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const Header = styled.div`
  font-family: Helvetica 25, sans-serif;
  font-weight: lighter;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #29abe2;
  width: 100%;
  p {
    color: white;
    font-size: xxx-large;
  }
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    color: white;

    input {
      padding: 20px;
      margin: 10px;
      border: none;
      background-color: inherit;
      color: white;

      ::placeholder {
        color: white;
        border: none;
      }
    }

    button {
      padding: 10px;
      margin: 50px 0;
      background-color: #012d51;
      color: #29abe2;
      width: 70%;
      border: none;
      font-size: xx-large;

      @media screen and (max-width: 480px) {
        font-size: large;
        text-align: center;
      }
    }
  }
`;

export const InputMaterial = styled(TextField)`
  color: white;
  && {
    width: 100%;
  }
`;

export const ContaninerStyledC = styled.div`
  .MuiFormLabel-root {
    color: white;
  }

  .MuiOutlinedInput-root {
    & > fieldset {
      color: white;
      border-color: white;
    }
  }

  .MuiInput-underline {
    border-bottom-color: white;
  }
`;
