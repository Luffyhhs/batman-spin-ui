import React from "react";
import CustomButton from "../Buttons/CustomButton";

const FishingBox = ({ item }) => {
  return (
    <div className="game f-game">
      <div
        className="f-game--img"
        style={{
          backgroundImage: `${item?.img ? `url(${item.img})` : "none"}`,
          backgroundSize: "100% 100%",
        }}
      ></div>
      {item?.name && <p className="f-game--name game-name">{item.name}</p>}
      <CustomButton text="Play Now" className="f-game--button game-button" />
    </div>
  );
};

export default FishingBox;
