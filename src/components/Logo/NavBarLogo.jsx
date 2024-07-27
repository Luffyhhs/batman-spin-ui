import React from "react";
import LogoBat from "./LogoBat";
import LogoText from "./LogoText";
import "./navBarLogo.scss";
const NavBarLogo = (props) => {
  return (
    <>
      <div className={props.className}>
        <LogoBat />
        <LogoText />
      </div>
    </>
  );
};

export default NavBarLogo;
