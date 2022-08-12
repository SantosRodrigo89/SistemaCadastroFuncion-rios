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
        window.location.reload()
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
      <button onClick={ClickButton}> Editar </button>
      {mostar === true ? (
        <EmployeeModal>
          <ModalContent>
            <FormHeader>
              <p>Editar funcionário</p>
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
                  <option value={""}>ESCOLHA UM DEPARTAMENTO</option>
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
export default EditEmployee;
