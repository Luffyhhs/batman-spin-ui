import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Box = ({ item }) => {
  const nav = useNavigate();
  return (
    <div
      className="game"
      onClick={() => {
        console.log("work");
        if (item?.click && item?.available) {
          nav(item.click);
        } else if (!item?.available) {
          alert("Coming Soon");
        }
      }}
    >
      {item?.link ? (
        <a href={item.link}>
          <div
            className="game-img"
            style={{
              backgroundImage: `${item?.img ? `url(${item.img})` : "none"}`,
              backgroundSize: " 100% 100%",
            }}
          ></div>
          {item?.name && <p className="game-name">{item.name}</p>}
        </a>
      ) : (
        <>
          <div
            className="game-img"
            style={{
              backgroundImage: `${item?.img ? `url(${item.img})` : "none"}`,
              backgroundSize: " 100% 100%",
            }}
          ></div>
          {item?.name && <p className="game-name">{item.name}</p>}
        </>
      )}
    </div>
  );
};

export default Box;
