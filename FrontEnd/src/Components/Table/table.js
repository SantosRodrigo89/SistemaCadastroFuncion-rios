import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { Content, Graphics, ItemTable, TableHead, TableRows } from "./styled";
import EditEmployee from "../EditEmployee/editEmployee";

const Table = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [selectDepartamento, setSelectDepartamento] = useState("");
  const [inputText, setInputText] = useState("");

  const getUsers = async () => {
    await axios
      .get(`${BASE_URL}/user/getUsers`)
      .then((res) => {
        console.log(res.data);
        setListaUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);

  const dataMask = (data) => {
    return data.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  };

  const filterDepartamento = listaUsers && listaUsers.filter;
  const filterUsers =
    listaUsers &&
    listaUsers
      .filter((user) =>
        inputText
          ? user.nome.toLowerCase().includes(inputText.toLowerCase())
          : true
      )
      .filter((res) => {
        return selectDepartamento === ""
          ? true
          : res.departamento === selectDepartamento;
      })
      .sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      })
      .map((user) => (
        <TableRows key={user.id}>
          <ItemTable>{user.nome}</ItemTable>
          <ItemTable>{user.departamento}</ItemTable>
          <ItemTable>{user.salario}</ItemTable>
          <ItemTable>{dataMask(user.nascimento)}</ItemTable>
          <ItemTable>
            <EditEmployee user={user} />
            <button>Excluir</button>
          </ItemTable>
        </TableRows>
      ));

  const departamentos = listaUsers.map((user) => user.departamento);

  const selectOptions =
    listaUsers &&
    [...new Set(departamentos)].map((departamento) => {
      return (
        <option value={departamento} key={departamento}>
          {departamento}
        </option>
      );
    });

  const handleSelect = (event) => {
    setSelectDepartamento(event.target.value);
  };

  return (
    <div>
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />

        <select
          name={"selectDepartamento"}
          onChange={handleSelect}
          value={selectDepartamento}
        >
          <option value={""}>ESCOLHA UM DEPARTAMENTO</option>
          {selectOptions}
        </select>

        <button> Pesquisar </button>
      </div>

      <Content>
        <Graphics>
          {listaUsers.length > 0 ? (
            <div>
              <TableHead>
                <ItemTable>Nome</ItemTable>
                <ItemTable>Departamento</ItemTable>
                <ItemTable>Salário</ItemTable>
                <ItemTable>Nascimento</ItemTable>
                <ItemTable> </ItemTable>
              </TableHead>

              {filterUsers}
            </div>
          ) : (
            <></>
          )}
        </Graphics>
      </Content>
    </div>
  );
};
export default Table;
