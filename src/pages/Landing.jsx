import React, { useCallback, useEffect } from "react";
import FloatingBar from "../components/Bars/FloatingBar";
import CustomBox from "../components/Boxes/CustomBox";
import { fishing, slot, vip } from "../constants/Games";
import "./landing.scss";
const Landing = () => {
  return (
    <>
      <FloatingBar />
      <div className="boxes">
        <CustomBox
          title="VIP Promotions"
          items={vip}
          bgImg={"/imgs/vipBg.png"}
        />
        <CustomBox title="Slot Games" items={slot} />
        <CustomBox title="Fishing Games" items={fishing} />
      </div>
    </>
  );
};

export default Landing;
