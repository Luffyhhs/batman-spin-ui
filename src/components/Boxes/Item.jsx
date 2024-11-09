import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Item = (props) => {
  const nav = useNavigate();
  return (
    <span onClick={props.item?.click ? () => nav(props.item.click) : () => {}}>
      {props.item.text}
    </span>
  );
};

export default Item;
