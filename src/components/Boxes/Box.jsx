import React from "react";

const Box = ({ item }) => {
  return (
    <div className="game">
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
