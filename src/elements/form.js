import React, { useState, useEffect, useRef } from "react";

import "../App.css";
import "../css/color.css";
import "../css/style.css";
import "../css/flex.css";
import "../css/layout.css";

import Select from "react-select";

import SelectedOp from "./selected.js";

const FormJsx = () => {
  const [list, setList] = useState([{}]);

  const [counter, setCounter] = useState(0);
  const [searchSubject, setSearchSubject] = useState("");
  const [display, setDisplay] = useState("hidden");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.addEventListener("click", (event) => {
      event.stopPropagation();
      setDisplay("list-item");
    });
    document.addEventListener("click", () => {
      setDisplay("none");
    });
  }, []);

  const increasedByOne = () => {
    setCounter(counter + 1);
    const newList = list.concat(selectedOption);
    setList(newList);
  };
  const setToZero = () => {
    setCounter(0);
    setList([]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("1 subject and score submitted", event.target);
  };

  // const options = [
  //   { value: "chocolate", label: "Chocolate" },
  //   { value: "strawberry", label: "Strawberry" },
  //   { value: "vanilla", label: "Vanilla" },
  // ];

  const khoa_options = [
    { value: 2020, label: "K20", color: "black" },
    { value: 2021, label: "K21", color: "black" },
  ];

  const [info, setInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/cautrucmonhoc")
      .then((response) => response.json())
      .then((json) => {
        setInfo(json);
      });
  }, []);
  const subject_options = info.map((i) => {
    return { value: i.msmh, label: i.msmh + " - " + i.monhoc };
  });

  const [nganhInfo, setNganhInfo] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3002/nganh")
      .then((response) => response.json())
      .then((json) => {
        setNganhInfo(json);
      });
  }, []);
  const spec_options = nganhInfo.map((i) => {
    return { value: i.MANGANH, label: i.MANGANH + " - " + i.TENCTDT };
  });

  const nganh_options = [
    { value: "BD", label: "Trung tâm Bảo Dưỡng Công Nghiệp" },
    { value: "CK", label: "Khoa Cơ Khí" },
    { value: "DC", label: "Khoa Địa chất và Dầu khí" },
    { value: "DD", label: "Khoa Điện - Điện Tử" },
    { value: "GT", label: "Khoa Kỹ thuật Giao thông" },
    { value: "HC", label: "Khoa Kỹ thuật Hóa học" },
    { value: "MO", label: "Khoa Môi trường và Tài nguyên" },
    { value: "MT", label: "Khoa Khoa học máy tính và kĩ thuật máy tính" },
    { value: "QL", label: "Khoa Quản lý công nghiệp" },
    { value: "UD", label: "Khoa Khoa học Ứng dụng" },
    { value: "VL", label: "Khoa Công nghệ vật liệu" },
    { value: "XD", label: "Khoa Kỹ thuật xây dựng" },
  ];

  const [selectedOption, setSelectedOption] = useState({
    idx: "",
    k: 0,
    nganh: "",
    spec: "",
    id: "",
    score: 0,
  });

  console.log(counter, "subjects added to list");

  const subjectToShow = searchSubject.length
    ? subject_options.filter((option) =>
        option.value.match(new RegExp("^" + searchSubject, "i"))
      )
    : subject_options.slice(0, 5);

  return (
    <>
      <form className="form_container" onSubmit={handleSubmit}>
        <h3>INPUT</h3>
        <span className="text-italic">
          Chương trình Kỹ sư Chất lượng Cao PFIEV và Chất lượng cao Tiếng Anh,
          tăng cường Tiếng Nhật vui lòng chọn như Hệ Đại trà
        </span>
        <br />
        <hr />
        <br />
        {/*Khóa*/}
        <label htmlFor="khoa">Khóa</label>
        <br />
        <Select
          defaultValue={selectedOption}
          onChange={(x) => {
            setSelectedOption((prev) => {
              return { ...prev, k: x.value };
            });
          }}
          options={khoa_options}
          loadOptions={khoa_options}
        />
        <br />
        {/*Ngành*/}
        <label htmlFor="nganh">Khoa/Ngành</label>
        <br />
        <Select
          defaultValue={selectedOption}
          onChange={(x) => {
            setSelectedOption((prev) => {
              return { ...prev, nganh: x.value };
            });
          }}
          options={nganh_options}
          loadOptions={nganh_options}
        />
        <br />
        {/*chuyên ngành*/}
        <label htmlFor="spec">Chuyên ngành</label>
        <Select
          defaultValue={selectedOption}
          onChange={(x) => {
            setSelectedOption((prev) => {
              return { ...prev, spec: x.value };
            });
          }}
          options={spec_options}
          loadOptions={spec_options}
        />
        <br />
        {/*Môn/Mã MH*/}
        <label htmlFor="subject">Mã Môn học</label>
        <br />
        <Select
          defaultValue={selectedOption}
          onChange={(x) => {
            setSelectedOption((prev) => {
              return { ...prev, id: x.value };
            });
          }}
          options={subject_options}
          loadOptions={subject_options}
        />
        <input
          type="text"
          ref={inputRef}
          placeholder="Search"
          onChange={({ target }) => setSearchSubject(target.value)}
          onFocus={(e) => {
            e.target.select();
          }}
          value={searchSubject}
        />
        <ul style={{ display: display }}>
          {subjectToShow.map((subject) => (
            <li key={subject.value}>
              <button onClick={() => setSearchSubject(subject.label)}>
                {subject.label}
              </button>
            </li>
          ))}
        </ul>
        <br />

        {/*Điểm*/}
        <label htmlFor="score">Điểm tổng kết: </label>
        <input
          className="input_score"
          type="number"
          id="score"
          onChange={(e) => {
            console.log(e);
            setSelectedOption((prev) => {
              return { ...prev, score: e.target.value };
            });
          }}
        />
        <br />
        {/*Input*/}
        <input
          className="btn btn-lg btn-rounded btn-no-border margin-sm"
          type="button"
          value="Add 1 subject"
          onClick={increasedByOne}
        />

        <input
          className="btn btn-lg btn-rounded btn-no-border margin-sm"
          type="button"
          value="RESET"
          onClick={setToZero}
        ></input>
        <br />
        <input
          className="btn btn-lg btn-rounded btn-no-border margin-sm"
          type="button"
          value="SUBMIT"
          onClick={handleSubmit}
        ></input>
      </form>
      <SelectedOp counter={counter} list={list} />
    </>
  );
};

export default FormJsx;
