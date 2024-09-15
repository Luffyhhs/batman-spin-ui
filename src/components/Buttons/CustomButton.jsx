import React from "react";

const CustomButton = (props) => {
  const handleClick = (e) => {
    e.preventDefault();
    props?.onClickFun();
  };

  return (
    <>
      <button onClick={handleClick} className={props.className}>
        {props.text}
        {props?.icon}
      </button>
    </>
  );
};

export default CustomButton;
