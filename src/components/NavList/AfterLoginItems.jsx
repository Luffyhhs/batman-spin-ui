import React, { useEffect } from "react";
import CustomButton from "../Buttons/CustomButton";
import "./afterLoginItems.scss";
import RoundedIconWithImg from "../RoundedIconWithImg";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpin,
  selectLoginUser,
  selectSpin,
} from "../../app/slices/auth/AuthSlice";
const AfterLoginItems = (props) => {
  const spinTime = useSelector(selectSpin);
  // const loginUser = useSelector(selectLoginUser);

  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getSpin({ api: "user/getSpin" }));
  // }, []);
  // console.log(spinTime);

  return (
    <>
      <div className="items-container">
        <CustomButton
          className={"spin-times"}
          text={`Play: ${spinTime.spinTime}`}
        />
        <RoundedIconWithImg bg={"/imgs/userDemo.png"} className={"user-icon"} />
      </div>
    </>
  );
};

export default AfterLoginItems;
