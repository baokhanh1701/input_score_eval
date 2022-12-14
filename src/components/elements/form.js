import React, { useState, useEffect, useRef } from "react";
import "../../App.css";
import "../../css/color.css";
import "../../css/style.css";
import "../../css/flex.css";
import "../../css/layout.css";
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
    { value: "BD", label: "Trung t??m B???o D?????ng C??ng Nghi???p" },
    { value: "CK", label: "Khoa C?? Kh??" },
    { value: "DC", label: "Khoa ?????a ch???t v?? D???u kh??" },
    { value: "DD", label: "Khoa ??i???n - ??i???n T???" },
    { value: "GT", label: "Khoa K??? thu???t Giao th??ng" },
    { value: "HC", label: "Khoa K??? thu???t H??a h???c" },
    { value: "MO", label: "Khoa M??i tr?????ng v?? T??i nguy??n" },
    { value: "MT", label: "Khoa Khoa h???c m??y t??nh v?? k?? thu???t m??y t??nh" },
    { value: "QL", label: "Khoa Qu???n l?? c??ng nghi???p" },
    { value: "UD", label: "Khoa Khoa h???c ???ng d???ng" },
    { value: "VL", label: "Khoa C??ng ngh??? v???t li???u" },
    { value: "XD", label: "Khoa K??? thu???t x??y d???ng" },
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
          Ch????ng tr??nh K??? s?? Ch???t l?????ng Cao PFIEV v?? Ch???t l?????ng cao Ti???ng Anh,
          t??ng c?????ng Ti???ng Nh???t vui l??ng ch???n nh?? H??? ?????i tr??
        </span>
        <br />
        <hr />
        <br />
        {/*Kh??a*/}
        <label htmlFor="khoa">Kh??a</label>
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
        {/*Ng??nh*/}
        <label htmlFor="nganh">Khoa/Ng??nh</label>
        <br />
        <Select
          defaultValue={selectedOption}
          onChange={(x) => {
            setSelectedOption((prev) => {
              return { ...prev, nganh: x.value };
            });
          }}
          width='50px'
          options={nganh_options}
          loadOptions={nganh_options}
        />
        <br />
        {/*chuy??n ng??nh*/}
        <label htmlFor="spec">Chuy??n ng??nh</label>
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
        {/*M??n/M?? MH*/}
        <label htmlFor="subject">M?? M??n h???c</label>
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

        {/*??i???m*/}
        <label htmlFor="score">??i???m t???ng k???t: </label>
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
