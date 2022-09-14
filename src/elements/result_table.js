import React from "react";
import "../index.css";
import "../App.css";
import "../css/color.css";
import "../css/flex.css";
import "../css/style.css";

const RTable = ({ output }) => {
  return (
    <>
{/*! COPIUM :) */}
      <table className="border-blue border">
        <tr className="border border-blue">
          <th> Mã môn học </th>
          <th> Điểm tổng kết </th>
        </tr>
        <tr>
          <td>IM3001</td>
          <td>9.697998144993079</td>
        </tr>
        <tr>
          <td>CO2017</td>
          <td>8.73010491298017</td>
        </tr>
        <tr>
          <td>MT1005</td>
          <td>7.358166619900073</td>
        </tr>
        <tr>
          <td>CO1005</td>
          <td>7.358166619900073</td>
        </tr>
        <tr>
          <td>CO2039</td>
          <td>7.806372368073</td>
        </tr>
        <tr>
          <td>CO3107</td>
          <td>6.933591554975884</td>
        </tr>
      </table>
    </>
  );
};

export default RTable;
