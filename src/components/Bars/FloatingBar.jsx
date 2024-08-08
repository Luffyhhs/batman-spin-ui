import React from "react";
import "./floatingBar.scss";
import CustomButton from "../Buttons/CustomButton";
import { useNavigate } from "react-router";
const FloatingBar = () => {
  const nav = useNavigate();
  const playNow = () => {
    nav("/wheel");
  };
  const winnerList = () => {
    nav("/winners");
  };
  return (
    <div className="float-bar bar">
      <CustomButton
        text="Play Now"
        className={`btn btn-play`}
        onClickFun={playNow}
      />
      <CustomButton
        text="Recent Winners"
        className={`btn btn-vip`}
        onClickFun={winnerList}
      />
    </div>
  );
};

export default FloatingBar;
