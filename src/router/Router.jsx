import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Landing from "../pages/Landing";
import Main from "../pages/Main";
import Winners from "../pages/Winners";

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
