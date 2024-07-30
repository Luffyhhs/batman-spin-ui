import React from "react";

const Table = ({ tHead, tBody }) => {
  const tableHead = tHead.map((d, i) => <th key={i}>{d}</th>);
  return (
    <>
      <table className="table">
        <thead>
          <tr>{tableHead}</tr>
        </thead>
        <tbody>{tBody}</tbody>
      </table>
    </>
  );
};

export default Table;
