import React, { useEffect } from "react";
import CustomButton from "../Buttons/CustomButton";
import "./afterLoginItems.scss";
import RoundedIconWithImg from "../RoundedIconWithImg";
import { useDispatch, useSelector } from "react-redux";
import { selectSpin } from "../../app/slices/auth/AuthSlice";
import { useNavigate } from "react-router";
const AfterLoginItems = () => {
  const spinTime = useSelector(selectSpin);
  const nav = useNavigate();

  // console.log(spinTime);
  const handleLogout = () => {
    localStorage.clear();
    nav("/");
    window.location.reload();
  };
  return (
    <>
      <div className="items-container">
        {spinTime !== null && (
          <CustomButton className={"spin-times"} text={`Play: ${spinTime}`} />
        )}
        <RoundedIconWithImg bg={"/imgs/userDemo.png"} className={"user-icon"} />
        <CustomButton
          onClickFun={handleLogout}
          className={"login-nav btn"}
          text={"LogOut"}
        />
      </div>
    </>
  );
};

export default AfterLoginItems;
