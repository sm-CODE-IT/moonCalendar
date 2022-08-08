/* components */
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import Line from "../components/Line";
import MyFooter from "../components/MyFooter";

import { useState } from "react";
import { Navigate } from "react-router-dom";

const Feedback = () => {
  /* for Plus button color */
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));
  console.log(themeMode);
  const plusButtonSrc = process.env.PUBLIC_URL + `/assets/${themeMode}Plus.png`;

  return (
    <div className="Feedback">
      <MyHeader
        btn1Type="short"
        btn1Text="Feedback"
        btn1Func={() => navigator("/feedback")}
        btn2Type="short"
        btn2Text="sign In"
        btn2Func={(e) => alert("sign clicked")}
      />
      <div className="main_wrapper">
        <div className="main">
          <div className="comment">
            <h1 className="h1">FeedBack</h1>
            <p className="caption">
              귀하의 귀중한 의견을 들려주십시오. 우리는 언제나 여러분의 의견을
              기다리고 있습니다.
            </p>
            <p className="caption alert">필수 항목은 *(으)로 표시합니다.</p>
          </div>
          <div className="input_box_wrapper">
            <div className="input_one">
              <p className="body1">어떤 문제에 대한 피드백이 있으십니까? *</p>
              <input
                type="text"
                className="input_box_one"
                placeholder="피드백을 입력해주세요"
              />
            </div>
            <div className="input_two">
              <p className="body1">상세 내용 *</p>
              <textarea
                type="text"
                className="input_box_two"
                placeholder="상세 내용을 입력해주세요"
              ></textarea>
            </div>
            <div className="input_three">
              <p className="body1">상세 이미지</p>
              <div className="plus_button_wrapper">
                <img src={plusButtonSrc} alt="" className="plus_button" />
              </div>
            </div>
            <div className="input_four">
              <p className="body1">이메일 주소 *</p>
              <input
                type="text"
                className="input_box_four"
                placeholder="이메일 주소를 입력해주세요"
              />
            </div>
            <div className="myButton_wrapper">
              <MyButton
                text="Submit"
                type="long"
                Func={() => alert("Submit")}
              ></MyButton>
            </div>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Feedback;
