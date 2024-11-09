import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loadable from "../components/Lodable";
const Layout = Loadable(lazy(() => import("../components/Layout")));
const Landing = Loadable(lazy(() => import("../pages/Landing")));
const Main = Loadable(lazy(() => import("../pages/Main")));
const Winners = Loadable(lazy(() => import("../pages/Winners")));
// const { Spin } = Loadable(lazy(() => import("antd/lib/spin")));
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path="wheel" element={<Main />} />
          <Route path="winners" element={<Winners />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
