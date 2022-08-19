import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
  Component,
} from "react";
// import ReactDOM from "react-dom";
/* components */
import { MyHeader } from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import Line from "../components/Line";
import WeatherItem from "../components/WeatherItem";
import Editor from "../components/ContentEditor";
import EditorContainer from "../components/EditorContainer";
/* util */
import useTheme from "../util/useTheme";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { weatherList } from "../util/weatherList";
import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const EditDiary = () => {
  return (
    <div className="EditDiary">
      <EditorContainer></EditorContainer>
    </div>
  );
};

export default EditDiary;
