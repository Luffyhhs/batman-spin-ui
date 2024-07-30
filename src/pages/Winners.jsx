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

const Winners = () => {
  const dispatch = useDispatch();
  const top10List = useSelector(selectTop10);
  const moreWinners = useSelector(selectMoreWinners);
  console.log(top10List, moreWinners);
  useEffect(() => {
    dispatch(fetchTopWinner({ api: "uiThing/top10" }));
    dispatch(fetchMoreWinner({ api: "uiThing/more-winners" }));
  }, []);

  const dummyTableBody = [
    {
      name: "hhs",
      prize: "something",
    },
    {
      name: "hhs",
      prize: "something",
    },
    {
      name: "hhs",
      prize: "something",
    },
    {
      name: "hhs",
      prize: "something",
    },
    {
      name: "hhs",
      prize: "something",
    },
  ];
  const top10Body = top10List.map((d, i) => {
    return (
      <tr key={i}>
        <td>{i + 1}</td>
        <td>{d.topName}</td>
        <td>{d?.prize}</td>
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
        <CustomBox items={slot} />
        <p className="table-title">Top Winner List</p>
        <Table tHead={tableHeadData} tBody={top10Body} />
        <p className="table-title">More Winner List</p>
        <Table tHead={tableHeadData} tBody={moreWinnerBody} />
      </div>
    </>
  );
};

export default Winners;
