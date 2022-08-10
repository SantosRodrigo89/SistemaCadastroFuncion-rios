import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import { Content, Graphics, ItemTable, TableHead, TableRows } from "./styled";



const Table = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [atualiza, setAtualiza] = useState(false);

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

  const dataMask = (data) => {
    return data.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  };

  return (
    <div>
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

              {listaUsers.map(( linha ) => {
           
                  return (
                    <TableRows key={linha.id}>
                   
                      <ItemTable>{linha.nome}</ItemTable>
                      <ItemTable>{linha.departamento}</ItemTable>
                      <ItemTable>R$ {linha.salario},00</ItemTable>
                      <ItemTable>{dataMask(linha.nascimento)}</ItemTable>
                      <ItemTable> Editar - Excluir </ItemTable>
                    </TableRows>
                  );
              })}
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
