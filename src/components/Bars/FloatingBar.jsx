import React from "react";
import "./floatingBar.scss";
import CustomButton from "../Buttons/CustomButton";
import { useNavigate } from "react-router";
const FloatingBar = ({ hideRecent = false }) => {
  const nav = useNavigate();
  const playNow = () => {
    const anchor = document.createElement("a");
    anchor.href = "https://m.batman688.net/";
    // anchor.target = "_blank";
    anchor.rel = "noopener noreferrer";
    anchor.click();
    // nav("/wheel");
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
      {!hideRecent && (
        <CustomButton
          text="Recent Winners"
          className={`btn btn-vip`}
          onClickFun={winnerList}
        />
      )}
    </div>
  );
};

export default FloatingBar;
