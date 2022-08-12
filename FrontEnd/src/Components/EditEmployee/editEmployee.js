import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import {
  ButtonContainer,
  MainContainer,
  EmployeeModal,
  ModalContent,
  FormHeader,
} from "./styled";

const EditEmployee = ({ user }) => {
  //logica modal
  const [mostar, setMostrar] = useState(false);

  const ClickButton = () => {
    setMostrar(true);
  };
  const ClickCancelar = () => {
    setMostrar(false);
  };

  //logica form
  const { form, onChange, clean, setForm } = useForm({
    nome: "",
    cpf: "",
    nascimento: "",
    salario: "",
    departamento: "",
  });

  const inicialInfos = () => {
    setForm({
      nome: user?.nome,
      cpf: user?.cpf,
      nascimento: user?.nascimento,
      salario: user?.salario,
      departamento: user?.departamento,
    });
  };

  useEffect(() => {
    inicialInfos();
  }, []);

  const updateUser = async () => {
    await axios
      .put(`${BASE_URL}/user/updateUser/${user?.id}`, form)
      .then((response) => {
        console.log(response);
        alert("Ok!");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  const onSubimitForm = (event) => {
    event.preventDefault();
    updateUser();
  };

  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  const cpfMask = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1");
  };

  return (
    <MainContainer>
      <ButtonContainer onClick={ClickButton}> editar </ButtonContainer>
      {mostar === true ? (
        <EmployeeModal>
          <ModalContent>
            <FormHeader>
              <h3>Editar funcionário</h3>
              <form onSubmit={onSubimitForm}>
                
                <p>Nome</p>
                <input
                  label="nome"
                  name={"nome"}
                  type={"text"}
                  placeholder="nome"
                  value={form.nome}
                  onChange={onChange}
                  required
                />

                <p>Cpf</p>
                <input
                  label="cpf"
                  name={"cpf"}
                  type={"text"}
                  placeholder="cpf"
                  value={cpfMask(form.cpf)}
                  onChange={onChange}
                  required
                />

                <p>Departamento</p>
                <select
                  name={"departamento"}
                  onChange={onChange}
                  type={"submit"}
                  value={form.departamento}
                >
                  <option value={""}>ESCOLHA UM DEPARTAMENTO</option>
                  <option value={form.departamento.suporte}>suporte</option>
                  <option value={form.departamento.administrativo}>
                    administrativo
                  </option>
                </select>

                <p>Salário</p>
                <input
                  label="salario"
                  name={"salario"}
                  type={"salary"}
                  placeholder="R$"
                  value={form.salario}
                  onChange={onChange}
                  required
                />

                <p> Data de Nascimento</p>
                <input
                  label="nascimento"
                  name={"nascimento"}
                  type={"text"}
                  placeholder="nascimento"
                  value={maskDate(form.nascimento)}
                  onChange={onChange}
                  required
                />

                <div>
                  <button onClick={ClickCancelar}>CANCELAR</button>
                  <button type="submit"> SALVAR </button>
                </div>
              </form>
            </FormHeader>
          </ModalContent>
        </EmployeeModal>
      ) : null}
    </MainContainer>
  );
};
export default EditEmployee;
