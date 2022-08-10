import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { Content, Graphics, ItemTable, TableHead, TableRows } from "./styled";

const Table = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [atualiza, setAtualiza] = useState(false);

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

  const filterUsers = listaUsers.filter((user) =>
    inputText ? user.nome.toLowerCase().includes(inputText.toLowerCase()) : true
  );

  const dataMask = (data) => {
    return data.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  };

  return (
    <div>
      <div>
        <input
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <select />
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
                <ItemTable> Editar - Excluir </ItemTable>
              </TableHead>

              {filterUsers.map((user) => (
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
              ))}
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
