import Menu from "../Menu/menu";
import { Main, Text, TextBox } from "./styled";
import React from "react";

const Header = () => {
  
  return (
    <Main>
     
      <Menu />
      <TextBox>
        <Text>
          <h1>ESTÁGIO</h1>
          <h2>PROVA DE SELEÇÃO</h2>
        </Text>
      </TextBox>
    </Main>
  );
};
export default Header;
