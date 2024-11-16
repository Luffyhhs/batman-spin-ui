import React, { useEffect } from "react";
import TopBar from "./Bars/TopBar";
import "./layout.scss";
import NavBar from "./Bars/NavBar";
import Carousel from "./Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdsList, selectAdsList } from "../app/slices/WheelSlice";
import { Outlet, useLocation } from "react-router";
import SpinItBox from "./Boxes/SpinItBox";
import FooterCom from "./Footer/FooterCom";
import { getSpin, selectLoginUser } from "../app/slices/auth/AuthSlice";

const Layout = (props) => {
  const location = useLocation();
  const token = localStorage.getItem("token")
    ? JSON.parse(localStorage.getItem("token"))
    : null;
  const dispatch = useDispatch();
  const imgArr = useSelector(selectAdsList);
  const loginUser = useSelector(selectLoginUser);
  useEffect(() => {
    dispatch(fetchAdsList({ api: "ads" }));
    loginUser !== null && token && dispatch(getSpin({ api: "user/getSpin" }));
  }, []);
  // console.log(location);
  return (
    <>
      <div className="layout">
        <div className="main-container">
          <header className="header">
            {/* <TopBar /> */}
            <NavBar />
            <Carousel imgArr={imgArr.data} />
          </header>
          <main className="content">
            <Outlet />
            {location.pathname !== "/winners" && <SpinItBox />}
          </main>
          <FooterCom />
        </div>
      </div>
    </>
  );
};

export default Layout;
