import React from "react";
import * as bs from "react-icons/bs";
import "./customBox.scss";
import Box from "./Box";

const CustomBox = (props) => {
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
          <div
            className={`${props?.className ? "box-bar bar-vip" : "box-bar"}`}
          >
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
          {props?.items !== undefined &&
            props?.items.map((item) => <Box item={item} />)}
        </div>
      </div>
    </>
  );
};

export default CustomBox;
