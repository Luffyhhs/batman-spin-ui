import React from "react";
import Language from "../LanguageButton";
import "./topBar.scss";
const TopBar = () => {
  return (
    <nav className="bar top-bar">
      <Language />
    </nav>
  );
};

export default TopBar;
