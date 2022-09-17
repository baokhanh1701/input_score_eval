import React, { useState, useEffect } from "react";
import "../../App.css";
import "../../css/color.css";
import "../../css/style.css";
import "../../css/flex.css";
import "../../css/layout.css";
import "./result_table";
import RTable from "./result_table";

const Result = ({ list }) => {
  const [output, setOutput] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/result")
      .then((response) => response.json())
      .then((json) => {
        setOutput(json);
      });
  }, []);

  return (
    <>
      <h1> COURSE RECOMMENDER</h1>
      <p className="text-center">
        Below is the output of subjects and your corresponding marks model and
        the next courses you should take.
        <br />
      </p>
      <h3> CÁC MÔN HỌC TIẾP THEO VÀ DỰ ĐOÁN ĐIỂM</h3>
      <h5> HỌC KÌ TIẾP THEO</h5>
      <RTable output={output} />
    </>
  );
};

export default Result;
