import React, { useEffect } from "react";
import Wheel from "../components/Wheel/Wheel";
import { useDispatch, useSelector } from "react-redux";
import { fetchWheelImg, getRandomLucky } from "../app/slices/WheelSlice";
import { getSpin, selectSpin } from "../app/slices/auth/AuthSlice";

const Main = () => {
  const dispatch = useDispatch();
  const spinTime = useSelector(selectSpin);
  useEffect(() => {
    dispatch(fetchWheelImg({ api: "wheel" }));
    dispatch(getSpin({ api: "user/getSpin" }));
    dispatch(getRandomLucky({ api: "lucky/getRandom" }));
  }, []);
  return (
    <section className="wheel">
      <Wheel />
    </section>
  );
};

export default Main;