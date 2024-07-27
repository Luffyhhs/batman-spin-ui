import React from "react";
import CustomBox from "../components/Boxes/CustomBox";
import { slot } from "../constants/Games";

const Winners = () => {
  return (
    <>
      <div className="winners">
        <CustomBox items={slot} />
      </div>
    </>
  );
};

export default Winners;
