import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import {
  MainContainer,
  EmployeeModal,
  ModalContent,
  FormHeader,
} from "./styled";

const NewEmployee = () => {
  //logica modal
  const [mostar, setMostrar] = useState(false);

  const ClickButton = () => {
    setMostrar(true);
  };
  const ClickCancelar = () => {
    setMostrar(false);
  };

  //logica form

  //chamando o hook useForm
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
        alert(res);
        clean();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {}, []);

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
              <p>Novo funcionário</p>
              <form onSubmit={onSubimitForm}>
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

                <input
                  id="outlined"
                  variant="outlined"
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
                  <option value={form.departamento.suporte}>suporte</option>
                  <option value={form.departamento.administrativo}>
                    administrativo
                  </option>
                </select>

                <input
                  id="outlined"
                  variant="outlined"
                  label="salario"
                  name={"salario"}
                  type={"salary"}
                  placeholder="R$"
                  value={form.salario}
                  onChange={onChange}
                  required
                />

                <input
                  id="outlined"
                  variant="outlined"
                  label="nascimento"
                  name={"nascimento"}
                  type={"text"}
                  placeholder="nascimento"
                  value={maskDate(form.nascimento)}
                  onChange={onChange}
                  required
                />

                <button onClick={ClickCancelar}>CANCELAR</button>
                <button type="submit"> SALVAR </button>
              </form>
            </FormHeader>
          </ModalContent>
        </EmployeeModal>
      ) : null}
    </MainContainer>
  );
};

export default NewEmployee;
