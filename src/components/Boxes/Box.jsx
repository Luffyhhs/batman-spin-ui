import React from "react";
import { useNavigate } from "react-router-dom";

const Box = ({ item }) => {
  const nav = useNavigate();
  return (
    <div
      className="game"
      onClick={item?.click ? () => nav(item.click) : () => {}}
    >
      <div
        className="game-img"
        style={{
          backgroundImage: `${item?.img ? `url(${item.img})` : "none"}`,
          backgroundSize: " 100% 100%",
        }}
      ></div>
      {item?.name && <p className="game-name">{item.name}</p>}
    </div>
  );
};

export default Box;
