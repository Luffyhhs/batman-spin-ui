import React from "react";

const CustomButton = (props) => {
  const handleClick = () => {
    props?.onClickFun();
  };

  return (
    <>
      <button onClick={handleClick} className={props.className}>
        {props.text}
      </button>
    </>
  );
};

export default CustomButton;
