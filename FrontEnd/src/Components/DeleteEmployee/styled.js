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
  width: 40%;
  height: 40%;
  background-color: whitesmoke;
  margin: auto;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  button {
    padding: 3%;
    margin: 1%;
    width: 30%;
    margin-top: 3%;
    cursor: pointer;
  }
`;

export const ButtonContainerExclude = styled.button`
  border: none;
  background-color: inherit;
  cursor: pointer;
`


