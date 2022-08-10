import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { useForm } from "../../Hooks/useForm";
import { ContaninerStyledC, Header, InputMaterial } from "./styled";


const Form = () => {
  const [listaUsers, setListaUsers] = useState([]);

  //chamando o hook useForm
  const { form, onChange, clean } = useForm({
    name: "",
    email: "",
    nascimento: "",
    telefone: "",
  });

  const onSubimitForm = (event) => {
    event.preventDefault();

    userCreator();
  };

  const userCreator = async () => {
    await axios
      .post(`${BASE_URL}/user/register`, form)
      .then((res) => {
        console.log(res);
        clean();
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  useEffect(() => {}, []);

  const maskDate = value => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  const maskPhone = value => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "($1) $2")
      .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
  };

  return (
    <ContaninerStyledC>
      <Header>
        <p>CADASTRO</p>
        <form onSubmit={onSubimitForm}>
          <InputMaterial
            id="standard-basic"
            variant="standard"
            label="nome"
            name={"nome"}
            type={"text"}
            placeholder="nome"
            value={form.nome}
            onChange={onChange}
            required
          />

          <InputMaterial
            id="standard-basic"
            variant="standard"
            label="email"
            name={"email"}
            type={"email"}
            placeholder="email"
            value={form.email}
            onChange={onChange}
            required
          />

          <InputMaterial
            id="standard-basic"
            variant="standard"
            label="nascimento"
            name={"nascimento"}
            type={"text"}
            placeholder="nascimento"
            value={maskDate(form.nascimento)}
            onChange={onChange}
            required
          />

          <InputMaterial
            id="standard-basic"
            variant="standard"
            label="telefone"
            name={"telefone"}
            type={"tel"}
            placeholder="telefone"
            value={maskPhone(form.telefone)}
            onChange={onChange}
            required
          />

          <button type="submit"> CADASTRAR </button>
        </form>
      </Header>
    </ContaninerStyledC>
  );
};
export default Form;
