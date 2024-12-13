import "./wheel.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  selectWheelStatus,
  selectWheelArr,
  selectWheelError,
  selectDeg,
  updateLucky,
  selectLuckyObj,
  selectUpdateLuckyStatus,
  getRandomLucky,
  selectUpdateLuckyError,
  selectRewardList,
  resetUpdateLuckyStatus,
  outedLucky,
  selectOutedLucky,
} from "../../app/slices/WheelSlice";
import { useEffect, useState } from "react";
import { selectSpin } from "../../app/slices/auth/AuthSlice";

const Wheel = ({ handleShow }) => {
  const dispatch = useDispatch();
  const [wheelObj] = useSelector(selectWheelArr);
  const wheelStatus = useSelector(selectWheelStatus);
  const wheelError = useSelector(selectWheelError);
  const luckyObj = useSelector(selectLuckyObj);
  const updateLuckyStatus = useSelector(selectUpdateLuckyStatus);
  const updateLuckyError = useSelector(selectUpdateLuckyError);
  const spinTime = useSelector(selectSpin);
  const rewardList = useSelector(selectRewardList);
  const [clicked, setClicked] = useState(false);
  // const outedLucky = useSelector(selectOutedLucky);

  const deg = useSelector(selectDeg);
  // console.log(spinTime, deg, luckyObj);
  // const deg = useSelector();
  // updateLuckyError !== "" && console.log(updateLuckyError);
  useEffect(() => {
    if (updateLuckyStatus === "success") {
      rotate();
      new Audio("/audio/spin.mp3").play();
      dispatch(outedLucky({ api: `lucky/${luckyObj._id}` }));
      dispatch(getRandomLucky({ api: "lucky/getRandom" }));
    }
    updateLuckyStatus === "fail" ||
      (updateLuckyStatus === "success" && dispatch(resetUpdateLuckyStatus()));
  }, [updateLuckyStatus]);
  function rotate() {
    document.querySelector(".wheel-img").style.transform = `rotate(${deg}deg)`;
    document.querySelector(".wheel-img").style.transition =
      "all 10s ease-in-out";
    // document.querySelector(".labels").style.transition = "all 7s ease-in-out";
    // document.querySelector(".labels").style.transform = `rotate(${deg}deg)`;
    // document.querySelector(".pointer").style.transitionDelay = "0.5s";
    // document.querySelector(".wheel").style.transitionDelay = "0.5s";
    document.querySelector(".wheel-img").style.transitionDuration = "10s";
    // document.querySelector(".labels").style.transitionDuration = "7s";
    document.querySelector(".wheel-img").style.transitionTimingFunction =
      "ease-in-out";
    // document.querySelector(".labels").style.transitionTimingFunction =
    // "ease-in-out";
  }

  const handleSpin = (e) => {
    e.preventDefault();
    setClicked(true);
    dispatch(
      updateLucky({
        api: `lucky/${luckyObj._id}`,
        data: {
          status: "out",
        },
      })
    );
  };

  const handleAnimateEnd = (e) => {
    e.preventDefault();
    new Audio("/audio/congrats.mp3").play();
    // console.log(e);
    handleShow();
  };
  return (
    <>
      <div className="wheel-wrapper">
        <div className="wheel-container">
          {wheelStatus == "fail" && <div>{wheelError}</div>}
          <div className="wheel" onTransitionEnd={handleAnimateEnd}>
            <img src={wheelObj?.url} alt="Spin Wheel" className="wheel-img" />
          </div>
          <img src={"/imgs/Pointer.png"} alt="Pointer" className="pointer" />
          {spinTime > 0 ? (
            <button
              className="spin-btn"
              onClick={handleSpin}
              disabled={clicked}
            ></button>
          ) : (
            <button className="spin-btn disable" disabled></button>
          )}
        </div>
        <div className="box-container"></div>
      </div>
    </>
  );
};

export default Wheel;
