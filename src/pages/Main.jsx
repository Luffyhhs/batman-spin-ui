import React, { useEffect } from "react";
import Wheel from "../components/Wheel/Wheel";
import { useDispatch, useSelector } from "react-redux";
import { fetchWheelImg, getRandomLucky } from "../app/slices/WheelSlice";
import {
  getSpin,
  selectLoginUser,
  selectSpin,
} from "../app/slices/auth/AuthSlice";
import { useState } from "react";
import ShowPrize from "../components/Modal/ShowPrize";
import CustomButton from "../components/Buttons/CustomButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./main.scss";
import { Tabs } from "antd";
import { useNavigate } from "react-router";
import LuckyCards from "../components/LuckyCards/LuckyCards";
import FloatingBar from "../components/Bars/FloatingBar";

const Main = () => {
  const dispatch = useDispatch();
  const spinTime = useSelector(selectSpin);
  const loginUser = useSelector(selectLoginUser);
  useEffect(() => {
    dispatch(fetchWheelImg({ api: "wheel" }));
  }, []);
  useEffect(() => {
    if (loginUser) {
      dispatch(getSpin({ api: "user/getSpin" }));
      dispatch(getRandomLucky({ api: "lucky/getRandom" }));
    }
  }, [loginUser]);
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
      <div className="btn-bar px-1">
        <CustomButton
          text={"Back"}
          icon={<FaArrowLeft />}
          className={"flex flex-reverse btn btn-next"}
          onClickFun={() => nav("/")}
        />
        <CustomButton
          text={"Play Now"}
          className={"btn btn-rounded"}
          onClickFun={() => {
            const anchor = document.createElement("a");
            anchor.href = "https://m.batman688.net/";
            // anchor.target = "_blank";
            anchor.rel = "noopener noreferrer";
            anchor.click();
          }}
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
