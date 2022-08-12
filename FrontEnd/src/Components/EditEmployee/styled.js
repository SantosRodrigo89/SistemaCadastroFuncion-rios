import styled from "styled-components";

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
  padding: 1%;
  width: 60%;
  height: 90%;
  background-color: whitesmoke;
  margin: auto;
`;

export const FormHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  
  form {
    display: flex;
    flex-direction: column;
    width: 60%;
    

    input {
      margin: 2%; 
    }

    button {
      padding: 3%;
      margin: 1%;
      width: 30%;
      margin-top: 3%;
      cursor: pointer;
     
    }

    select {
      margin: 2%; 
    }
  }
`;

export const ButtonContainer = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`


