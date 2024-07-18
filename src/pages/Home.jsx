import { useDispatch, useSelector } from "react-redux";
import Carousel from "../components/Carousel/Carousel";
import Wheel from "../components/Wheel/Wheel";
import "./home.scss";
import {
  fetchAdsList,
  fetchWheelImg,
  getRandomLucky,
  selectAdsList,
} from "../app/slices/WheelSlice";
import { useEffect } from "react";
import { getSpin, selectSpin } from "../app/slices/auth/AuthSlice";
const Home = () => {
  const dispatch = useDispatch();
  const imgArr = useSelector(selectAdsList);
  const spinTime = useSelector(selectSpin);
  useEffect(() => {
    dispatch();
    dispatch(fetchAdsList({ api: "ads" }));
    dispatch(fetchWheelImg({ api: "wheel" }));
    // dispatch(getSpin({ api: "user/getSpin" }));
  }, []);

  useEffect(() => {
    spinTime.spinTime > 0 &&
      dispatch(getRandomLucky({ api: "lucky/getRandom" }));
  }, [spinTime.spinTime]);

  console.log(spinTime);
  return (
    <section className="main-section">
      <p className="spin-time">{`You have ${spinTime.spinTime} spin`}</p>
      <div className="wheel-main">
        <Wheel />
      </div>
    </section>
  );
};

export default Home;
