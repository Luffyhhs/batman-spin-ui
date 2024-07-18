import React from "react";
import CustomButton from "../Buttons/CustomButton";
import "./navItems.scss";
const NavItems = () => {
  return (
    <>
      <div className="items-container">
        <CustomButton className={"login-nav btn"} text="Login" />
      </div>
    </>
  );
};

export default NavItems;
