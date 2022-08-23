import ".././css/NewDiary.css";
import ".././css/WeatherItem.css";
import React from "react";
// import ReactDOM from "react-dom";
/* components */
import EditorContainer from "../components/EditorContainer";

const newDiary = () => {
  return (
    <div className="EditDiary">
      <EditorContainer></EditorContainer>
    </div>
  );
};

export default newDiary;
