import React from "react";
import "../index.css";
import "../App.css";
import "../css/color.css";
import "../css/flex.css";
import "../css/style.css";

const SelectedOp = ({ counter, list }) => {

  return (
    <div className="border border-white width-full text-center margin-md rounded-2-2">
      <label> SUBJECTS INFORMATION </label>
      <br />
      {counter} subject(s) added
      <hr />

      <table className="border-blue border width-full">
        <tr className="border border-blue">
          <th> Khóa </th>
          <th> Khoa/Ngành </th>
          <th> Chuyên ngành </th>
          <th> Mã môn học </th>
          <th> Điểm tổng kết </th>
        </tr>
        {list.map((item) => (
          <tr key={item.id}>
            <td>{item.k}</td>
            <td>{item.nganh}</td>
            <td>{item.spec}</td>
            <td>{item.id}</td>
            <td>{item.score}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default SelectedOp;
