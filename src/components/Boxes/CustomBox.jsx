import React from "react";
import * as bs from "react-icons/bs";
import "./customBox.scss";
import Box from "./Box";
import FishingBox from "./FishingBox";

const CustomBox = (props) => {
  const mapFunction = (items, box) => {
    return items.map((item, index) =>
      box === "box" ? (
        <Box item={item} key={index} />
      ) : (
        <FishingBox item={item} key={index} />
      )
    );
  };
  const renderBox = (items) => {
    return items?.length > 3
      ? mapFunction(items, "fishBox")
      : mapFunction(items, "box");
  };
  return (
    <>
      <div
        className="box"
        style={{
          backgroundImage: `${props?.bgImg ? `url(${props.bgImg})` : "none"}`,
          backgroundSize: "100% 100%",
        }}
      >
        {props?.title !== undefined && (
          <div className={`${props?.bgImg ? "box-bar bar-vip" : "box-bar"}`}>
            <h4
              className={`${
                props?.bgImg ? "box-bar--title title-vip" : "box-bar--title"
              }`}
            >
              {props?.title}
            </h4>
            <div className={`${props?.bgImg ? "arrows arrows-vip" : "arrows"}`}>
              <span>
                <bs.BsArrowLeftCircle />
              </span>
              <span>
                <bs.BsArrowRightCircle />
              </span>
            </div>
          </div>
        )}
        <div className="games">
          {props.items !== undefined && renderBox(props.items)}
        </div>
      </div>
    </>
  );
};

export default CustomBox;
