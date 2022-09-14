import React from "react";

import "../App.css";
import "../css/color.css";
import "../css/style.css";
import "../css/flex.css";
import "../css/layout.css";

const Intro = () => {
  return (
    <>
      <h1> COURSE RECOMMENDER</h1>
      <p className="text-center">
        Dưới đây là thông tin nhập của môn học và điểm tổng kết của bạn, Course Recommender sẽ dự đoán môn học tiếp theo bạn nên đăng kí vào học kì kế tiếp.
        <br />
        <br />
        Mô hình "Xây dựng lộ trình học cho sinh viên Bách Khoa" sẽ đề xuất được
        cho sinh viên những môn học bản thân có khả năng học tốt cho học kì sau
        thông qua điểm số các môn kì trước và các môn tiên quyết của các khoa,
        qua đó rút ngắn được thời gian tìm kiếm, đồng thời giúp sinh viên có kết
        quả học tập tốt hơn.
      </p>
      <div>
        <h3>Cách sử dụng COURSE RECOMMENDER</h3>
        <ol className="text-center">
          <li>
            <h4>Nhập thông tin bao gồm:</h4>
            <ul>
              <li>Khóa (K20, K21)</li>
              <li>Khoa và ngành bạn học</li>
              <li>Chuyên ngành bạn học</li>
              <li>Mã môn học và kiểm tra môn học</li>
              <li>Điểm của môn học đó</li>
            </ul>
          </li>
          <li>
            <h4>
              "Add 1 subject" để thêm một môn học
              <br />
              "Reset" để xóa tất cả các môn học đã thêm
              <br />
              "Submit" để hoàn tất
            </h4>
          </li>
        </ol>
      </div>
    </>
  );
};

export default Intro;
