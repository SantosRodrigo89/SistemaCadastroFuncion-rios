import axios from "axios";
import React, { useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { MainContainer, EmployeeModal, ModalContent, ButtonContainer, ButtonContainerExclude} from "./styled";

const DeleteEmployee = ({ user }) => {
  const [mostar, setMostrar] = useState(false);

  const ClickButton = () => {
    setMostrar(true);
  };

  const ClickCancelar = () => {
    setMostrar(false);
  };

  const deleteUser = async () => {
    await axios
      .delete(`${BASE_URL}/user/deleteUser/${user?.id}`)
      .then((response) => {
        alert("Usuário deletado com sucesso!");
        console.log(response.data);
        window.location.reload()
      })
      .catch((error) => {
        console.log(error.response);
      })
    }

    const nome =  user?.nome;
    const cpf = user?.cpf;

    return (
      <MainContainer>
        <ButtonContainerExclude onClick={ClickButton}> excluir </ButtonContainerExclude>
        {mostar === true ? (
          <EmployeeModal>
            <ModalContent>
              <h3>Deseja excluir o funcionário abaixo?</h3>
                <p>{nome}</p>
                <p>CPF: {cpf}</p>
              <ButtonContainer>
              <button onClick={deleteUser}> Deletar </button>
              <button onClick={ClickCancelar}>Cancelar</button>
              </ButtonContainer>
            </ModalContent>
          </EmployeeModal>
        ) : null}
      </MainContainer>
    );
  };

export default DeleteEmployee;
