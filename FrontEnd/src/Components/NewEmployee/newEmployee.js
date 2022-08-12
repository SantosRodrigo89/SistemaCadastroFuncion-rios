import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import {
  MainContainer,
  EmployeeModal,
  ModalContent,
  FormHeader,
  ButtonContainer,
} from "./styled";

const NewEmployee = () => {
  const [mostar, setMostrar] = useState(false);

  const ClickButton = () => {
    setMostrar(true);
  };

  const ClickCancelar = () => {
    setMostrar(false);
  };

  const { form, onChange, clean } = useForm({
    nome: "",
    cpf: "",
    nascimento: "",
    salario: "",
    departamento: "",
  });

  const onSubimitForm = (event) => {
    event.preventDefault();
    userCreator();
  };

  const userCreator = async () => {
    await axios
      .post(`${BASE_URL}/user/register`, form)
      .then((res) => {
        alert("Criado", res.data);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err.response);
      });
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
      <button onClick={ClickButton}> Novo Funcionário </button>
      {mostar === true ? (
        <EmployeeModal>
          <ModalContent>
            <FormHeader>
              <h4>Novo funcionário</h4>
              <form onSubmit={onSubimitForm}>

                <p>Nome</p>
                <input
                  id="outlined"
                  variant="outlined"
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
                  placeholder="Cpf"
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
                  <button onClick={ClickCancelar}>Cancelar</button>
                  <button type="submit"> Salvar </button>
                </div>
              </form>
            </FormHeader>
          </ModalContent>
        </EmployeeModal>
      ) : null}
    </MainContainer>
  );
};

export default NewEmployee;
