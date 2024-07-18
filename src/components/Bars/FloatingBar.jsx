import React from "react";
import "./floatingBar.scss";
import CustomButton from "../Buttons/CustomButton";
const FloatingBar = () => {
  return (
    <div className="float-bar bar">
      <CustomButton text="Play Now" className={`btn btn-play`} />
      <CustomButton text="Vip Promotion" className={`btn btn-vip`} />
    </div>
  );
};

export default FloatingBar;
