import React from "react";
import NavBarLogo from "../Logo/NavBarLogo";
import "./navBar.scss";
import NavItems from "../NavList/NavItems";

const NavBar = () => {
  return (
    <nav className="bar nav-bar">
      <NavBarLogo />
      <NavItems />
    </nav>
  );
};

export default NavBar;
