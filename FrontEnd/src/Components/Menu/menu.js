import React from "react";
import logo from "../../Assets/icones/logo-in8-dev.svg";
import NavBar from "../NavBar/navBar";
import { Main } from "./styled";

const Menu = () => {
  
  return (
    <Main>
      <img src={logo} alt="logo" />
      <NavBar  />
    </Main>
  );
};
export default Menu;
