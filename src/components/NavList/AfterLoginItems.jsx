import React, { useEffect } from "react";
import CustomButton from "../Buttons/CustomButton";
import "./afterLoginItems.scss";
import RoundedIconWithImg from "../RoundedIconWithImg";
import { useDispatch, useSelector } from "react-redux";
import { selectSpin } from "../../app/slices/auth/AuthSlice";
const AfterLoginItems = () => {
  const spinTime = useSelector(selectSpin);

  // console.log(spinTime);

  return (
    <>
      <div className="items-container">
        {spinTime !== 0 && (
          <CustomButton className={"spin-times"} text={`Play: ${spinTime}`} />
        )}
        <RoundedIconWithImg bg={"/imgs/userDemo.png"} className={"user-icon"} />
        <CustomButton className={"login-nav btn"} text={"LogOut"} />
      </div>
    </>
  );
};

export default AfterLoginItems;
