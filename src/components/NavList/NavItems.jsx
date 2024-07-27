import React, { useState } from "react";
import CustomButton from "../Buttons/CustomButton";
import "./navItems.scss";
import Login from "../Modal/Login";

const NavItems = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="items-container">
        {open && <Login onClose={onClose} />}
        <CustomButton
          className={"login-nav btn"}
          text="Login"
          onClickFun={showModal}
        />
      </div>
    </>
  );
};

export default NavItems;
