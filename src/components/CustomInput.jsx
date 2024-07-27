import React from "react";

const CustomInput = (props) => {
  const {
    type,
    label,
    id,
    cls,
    name,
    val,
    onChg,
    onBlr,
    placeholder,
    containerClass,
  } = props;
  return (
    <div className={`${containerClass}`}>
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        className={`input ${cls}`}
        id={id}
        placeholder={placeholder}
        name={name}
        value={val}
        onChange={onChg}
        onBlur={onBlr}
      />
    </div>
  );
};

export default CustomInput;
