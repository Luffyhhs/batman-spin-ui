import React from "react";
import Titles from "../Titles";
import Item from "./Item";

const ItemsBox = (props) => {
  return (
    <>
      <div className={`items ${props?.className ? props.className : ""}`}>
        <Titles title={props.title} className={"items-title"} />
        {props?.items?.map((item, index) => (
          <Item key={index} item={item} />
        ))}
      </div>
    </>
  );
};

export default ItemsBox;
