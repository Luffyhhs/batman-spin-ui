import React, { useEffect } from "react";
import CustomBox from "../components/Boxes/CustomBox";
import { slot } from "../constants/Games";
import Table from "../components/Table/Table";
import "./winners.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoreWinner,
  fetchTopWinner,
  selectMoreWinners,
  selectTop10,
} from "../app/slices/WinnerSlice";
import CustomButton from "../components/Buttons/CustomButton";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router";

const Winners = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const top10List = useSelector(selectTop10);
  const moreWinners = useSelector(selectMoreWinners);
  // console.log(top10List, moreWinners);
  useEffect(() => {
    dispatch(fetchTopWinner({ api: "uiThing/top10" }));
    dispatch(fetchMoreWinner({ api: "uiThing/more-winners" }));
  }, []);
  // console.log(moreWinners, top10List);

  const top10Body = top10List.map((d, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{d.topName.name}</td>
        <td>{d?.topName.prize}</td>
      </tr>
    );
  });
  const moreWinnerBody = moreWinners.map((d, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{d?.name}</td>
        <td>{d?.prize}</td>
      </tr>
    );
  });
  const tableHeadData = ["No", "Name", "Prize"];
  return (
    <>
      <div className="winners">
        <div className="btn-bar">
          <CustomButton
            text={"Back To Home"}
            icon={<FaArrowLeft />}
            className={"flex flex-reverse btn btn-next"}
            onClickFun={() => nav("/")}
          />
          <CustomButton
            text={"Play Now"}
            className={"btn btn-rounded"}
            onClickFun={() => {
              const anchor = document.createElement("a");
              anchor.href = "https://m.batman688.net/";
              // anchor.target = "_blank";
              anchor.rel = "noopener noreferrer";
              anchor.click();
            }}
          />
          <CustomButton
            text={"Play Spin"}
            icon={<FaArrowRight />}
            className={"flex btn btn-next"}
            onClickFun={() => nav("/wheel")}
          />
        </div>
        {/* <CustomBox items={slot} /> */}
        <p className="table-title">Top Winner List</p>
        <Table tHead={tableHeadData} tBody={top10Body} />
        <p className="table-title">More Winner List</p>
        <Table tHead={tableHeadData} tBody={moreWinnerBody} />
      </div>
    </>
  );
};

export default Winners;
