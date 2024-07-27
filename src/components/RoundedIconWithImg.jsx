import React from "react";

const RoundedIconWithImg = (props) => {
  return (
    <div
      className={props.className}
      style={{
        backgroundImage: `url(${props.bg})`,
        backgroundSize: "100% 100%",
      }}
    ></div>
  );
};

export default RoundedIconWithImg;
