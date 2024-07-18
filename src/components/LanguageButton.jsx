import React from "react";
import "./languageButton.scss";
import enFlag from "../../public/icons/enFlag.svg";
const Language = () => {
  return (
    <div className="btn btn-ln">
      <img src={enFlag} alt="flag" />
      <span>En</span>
      <img src="./icons/Vector.svg" alt="" />
    </div>
  );
};

export default Language;
