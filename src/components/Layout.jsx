import React, { useEffect } from "react";
import TopBar from "./Bars/TopBar";
import "./layout.scss";
import NavBar from "./Bars/NavBar";
import Carousel from "./Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdsList, selectAdsList } from "../app/slices/WheelSlice";
import FloatingBar from "./Bars/FloatingBar";
import { Outlet } from "react-router";
import CustomBox from "./Boxes/CustomBox";
import { vip, slot } from "../constants/Games";
const Layout = () => {
  const dispatch = useDispatch();
  const imgArr = useSelector(selectAdsList);
  useEffect(() => {
    dispatch(fetchAdsList({ api: "ads" }));
  }, []);
  return (
    <>
      <div className="layout">
        <section className="main-container">
          <header className="header">
            <TopBar />
            <NavBar />
            <Carousel imgArr={imgArr.data} />
          </header>
          <section className="body">
            <FloatingBar />
            <div className="boxes">
              <CustomBox
                title="VIP Promotions"
                items={vip}
                bgImg={"/imgs/vipBg.png"}
              />
              <CustomBox title="Slot Games" items={slot} />
              <CustomBox title="Fishing Games" items={slot} />
              <CustomBox />
            </div>
          </section>
          <footer></footer>
        </section>
      </div>
    </>
  );
};

export default Layout;
