import React, { useEffect } from "react";
import Wheel from "../components/Wheel/Wheel";
import { useDispatch, useSelector } from "react-redux";
import { fetchWheelImg, getRandomLucky } from "../app/slices/WheelSlice";
import { getSpin, selectSpin } from "../app/slices/auth/AuthSlice";
import { useState } from "react";
import ShowPrize from "../components/Modal/ShowPrize";
import CustomButton from "../components/Buttons/CustomButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./main.scss";
import { useNavigate } from "react-router";

const Main = () => {
  const dispatch = useDispatch();
  const spinTime = useSelector(selectSpin);
  useEffect(() => {
    dispatch(fetchWheelImg({ api: "wheel" }));
    dispatch(getSpin({ api: "user/getSpin" }));
    dispatch(getRandomLucky({ api: "lucky/getRandom" }));
  }, []);
  const nav = useNavigate();
  const [show, setShow] = useState(false);
  const onShow = () => {
    setShow(true);
  };
  const onClose = () => {
    setShow(false);
  };
  return (
    <section className="wheel">
      {show && <ShowPrize onClose={onClose} />}
      <div className="btn-bar">
        <CustomButton
          text={"Back"}
          icon={<FaArrowLeft />}
          className={"flex flex-reverse btn btn-next"}
          onClickFun={() => nav("/")}
        />
        <CustomButton
          text={"Winner List"}
          icon={<FaArrowRight />}
          className={"flex btn btn-next"}
          onClickFun={() => nav("/winners")}
        />
      </div>
      <Wheel handleShow={onShow} />
    </section>
  );
};

export default Main;
