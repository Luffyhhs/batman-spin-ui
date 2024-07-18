import React from "react";

const CustomButton = (props) => {
  return (
    <>
      <button className={props.className}>{props.text}</button>
    </>
  );
};

export default CustomButton;
