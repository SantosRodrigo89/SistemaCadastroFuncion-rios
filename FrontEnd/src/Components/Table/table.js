import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { Content, Graphics, ItemTable, TableHead, TableRows } from "./styled";

const Table = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
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
  }, [atualiza]);

  console.log(listaUsers);

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
        // a must be equal to b
        return 0;
      })
      .map((user) => (
        <TableRows key={user.id}>
          <ItemTable>{user.nome}</ItemTable>
          <ItemTable>{user.departamento}</ItemTable>
          <ItemTable>{user.salario}</ItemTable>
          <ItemTable>{dataMask(user.nascimento)}</ItemTable>
          <ItemTable>
            <button>Editar</button>
            <button>Excluir</button>
          </ItemTable>
        </TableRows>
      ));

  const selectOptions =
    listaUsers &&
    listaUsers.map((user) => {
      return (
        <option value={user.departamento} key={user.id}>
          {user.departamento}
        </option>
      );
    });

  const handleSelect = (event) => {
    setSelectDepartamento(event.target.value);
  };

  console.log(filterUsers);

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
        <option value={""}>ESCOLHAR UM DEPARTAMENTO</option>
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
        <button>Novo funcionário</button>
      </Content>
    </div>
  );
};
export default Table;
