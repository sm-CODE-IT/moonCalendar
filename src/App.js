import MyButton from "./components/MyButton";
import MyHeader from "./components/MyHeader";
import Line from "./components/Line";
import "./App.css";

//for popup
import React, { useState, useNavigate } from "react";

import PopupContent from "./components/PopupContent";
import Signin from "./pages/Signin";

const App = () => {
  const [isOpenPopup, setisOpenPopup] = useState(false);
  const [input, setInput] = useState("");

  const toggle = () => {
    setisOpenPopup(!isOpenPopup);
  };

  const handleOnChange = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <MyHeader
        btn1Type="Feedback"
        btn1Text="Feedback"
        btn1Func={(e) => alert("Feedback clicked")}
        btn2Type="sign"
        btn2Text="sign"
        btn2Func={(e) => alert("sign clicked")}
      />
      <div className="forPadding">
        <Line weight={1} theme="light" />
      </div>
      <div className="forPadding">
        <Line weight={3} theme="dark" />
      </div>
      <div className="forPadding">
        <Line weight={5} theme="light" />
      </div>
      <div className="forPadding">
        <Line weight={10} theme="dark" />
      </div>
    </div>
  );
};

export default App;
