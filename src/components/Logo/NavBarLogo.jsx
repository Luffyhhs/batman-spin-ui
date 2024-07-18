import React from "react";
import LogoBat from "./LogoBat";
import LogoText from "./LogoText";
import "./navBarLogo.scss";
const NavBarLogo = () => {
  return (
    <>
      <div className="logo-container">
        <LogoBat />
        <LogoText />
      </div>
    </>
  );
};

export default NavBarLogo;
