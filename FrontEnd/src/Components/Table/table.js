import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../Constants/url";
import {
  Content,
  Graphics,
  ItemTable,
  TableStyled,
  TableHead,
  TableRows,
  ContainerScroll,
  NameTable,
  NumberTable,
  NameTable1,
  NameTable2,
  NameTable3,
  ItemTable1,
  ItemTable2,
} from "./styled";
import ScrollToTop from "../scroll/scrollToTop";

const Table = () => {
  const [listaUsers, setListaUsers] = useState([]);
  const [atualiza, setAtualiza] = useState(false);
  const [participTotal, setParticipTotal] = useState(0);
  const [valores, setValores] = useState([]);

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

    let total = 0;

    listaUsers.forEach((item) => {
      total += Number(item.participation);
      setParticipTotal(total);

      const valoresUsers = listaUsers.map((valor) => {
        return valor.participation;
      });
      setValores(valoresUsers);
    });
  }, [atualiza]);

  const dataMask = (data) => {
    return data.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
  };

  return (
    <div>
      <Content>
        <h1>LISTA DE CADASTRO</h1>

        <Graphics>
          {listaUsers.length > 0 ? (
            <TableStyled>
              <TableHead>
                <NameTable> </NameTable>
                <NameTable1>NOME</NameTable1>
                <NameTable2>E-MAIL</NameTable2>
                <NameTable3>NASCIMENTO</NameTable3>
                <NameTable>TELEFONE</NameTable>
              </TableHead>

              {listaUsers.map(( linha ) => {
           
                  return (
                    <TableRows key={linha.id}>
                      <NumberTable>{linha.id}</NumberTable>
                      <ItemTable>{linha.nome}</ItemTable>
                      <ItemTable2>{linha.email}</ItemTable2>
                      <ItemTable>{dataMask(linha.nascimento)}</ItemTable>
                      <ItemTable1>{linha.telefone}</ItemTable1>
                    </TableRows>
                  );
              })}
            </TableStyled>
          ) : (
            <></>
          )}
        </Graphics>
      </Content>
      <ContainerScroll>
        <ScrollToTop />
      </ContainerScroll>
    </div>
  );
};
export default Table;
