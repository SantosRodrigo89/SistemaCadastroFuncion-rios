import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const MainContainer = styled.div``;

export const EmployeeModal = styled.div`
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1;
  overflow: auto;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 90%;
  background-color: whitesmoke;
  margin: auto;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  
  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    

    input {
      
      margin: 2%; 
    }

    button {
      
      padding: 1%;
      margin: 1%;
     
    }

    select {
      margin: 2%; 
    }
  }
`;

export const InputMaterial = styled(TextField)`
    width: 100%;
`;