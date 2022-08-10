import { NavStyle } from "./styled";
import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const NavBar = () => {
  return (
    <div>
      <NavStyle >
        <AnchorLink href="#cadastro" offset="10">cadastro</AnchorLink>
        &bull;
        <AnchorLink href="#lista" offset="10">lista</AnchorLink>
        &bull;
        <AnchorLink href="#sobre" offset="10">sobre</AnchorLink>
      </NavStyle>
    </div>
  );
};

export default NavBar;
