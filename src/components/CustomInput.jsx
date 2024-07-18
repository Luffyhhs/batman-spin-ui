import React from "react";

const CustomInput = (props) => {
  const { type, label, id, cls, name, val, onChg, onBlr } = props;
  return (
    <div className="">
      <input
        type={type}
        className={`input ${cls}`}
        id={id}
        placeholder={label}
        name={name}
        value={val}
        onChange={onChg}
        onBlur={onBlr}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CustomInput;
