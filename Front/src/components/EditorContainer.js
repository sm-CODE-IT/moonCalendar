import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
import { DiaryDispatchContext } from "../App";
// import ReactDOM from "react-dom";
/* components */
import { MyHeader } from "./MyHeader";
import MyFooter from "./MyFooter";
import Line from "./Line";
import WeatherItem from "./WeatherItem";
import ContentEditor from "./ContentEditor";
import EmptyPopup from "./EmptyPopup";
/* util */
import useTheme from "../util/useTheme";
import { useNavigate, useParams } from "react-router-dom";

import { weatherList } from "../util/weatherList";
// import { EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const EditorContainer = ({ isEdit, originData }) => {
  /* for scroll */
  /* when scroll up -> show Header */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTopZero, setIsTopZero] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setIsTopZero(prevScrollPos <= currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isTopZero, handleScroll]);

  const navigate = useNavigate();
  //   /* icon */
  //   const { theme } = useContext(MyHeader);
  //   console.log(theme);
  const themeMode = localStorage.getItem("theme");
  const calendarSrc =
    process.env.PUBLIC_URL + `/assets/${themeMode}CalendarIcon.png`;
  const personSrc =
    process.env.PUBLIC_URL + `/assets/${themeMode}PersonIcon.png`;
  const weatherSrc =
    process.env.PUBLIC_URL + `/assets/${themeMode}WeatherIcon.png`;

  /* title */
  const titleRef = useRef();
  const [title, setTitle] = useState("");

  /* date */
  const [dateObj, setDate] = useState(useParams());
  const { date } = useParams();
  const [year, month, day] = dateObj.date.split("-");

  /* who */
  const whoRef = useRef();
  const [who, setWho] = useState("");

  /* weather */
  const [weather_id, setWeather] = useState(1);
  const handleRemote = useCallback((weather_id) => {
    setWeather(weather_id);
  }, []);

  /* total content */
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [contentRaw, setContentRaw] = useState({});

  /* Submit Button */
  const { onCreate, onRemove, onEdit } = useContext(DiaryDispatchContext);
  const [visibility, setVisibility] = useState("hidden");
  const [emptyCus, setEmptyCus] = useState("");
  const handleSubmit = () => {
    if (title < 1) {
      setEmptyCus("Title");
      setVisibility("visible");
      return;
    }

    if (content === "<p><br></p>") {
      setEmptyCus("content");
      setVisibility("visible");
      return;
    }

    if (
      window.confirm(
        isEdit
          ? "수정을 완료하시겠습니까?"
          : "새로운 일기 작성을 완료하시겠습니까?"
      )
    ) {
      if (!isEdit) {
        onCreate(title, date, who, weather_id, content, contentRaw);
        navigate("/calendar", { replace: true });
      } else {
        console.log("EditorContainer", content);
        onEdit(title, date, who, weather_id, content, contentRaw);
        navigate(`/finDiary/${date}`, { replace: true });
      }
    }
  };

  /* Cancel Button */
  const handleCancel = () => {
    if (
      window.confirm(
        "취소하시면 작성 중인 내용이 저장되지 않을 수 있습니다.\n취소하시겠습니까?"
      )
    ) {
      navigate(-1);
    }
  };

  /* 수정 중이라면 기본 정보 셋업 */
  useEffect(() => {
    if (isEdit) {
      setTitle(originData.title);
      setWho(originData.who);
      setWeather(originData.weather_id);
      setContent(originData.content);
    }
  }, [isEdit, originData]);

  return (
    <div className="EditorContainer">
      <MyHeader
        btn1Type="short"
        btn1Text="Submit"
        btn1Func={handleSubmit}
        btn2Type="short red"
        btn2Text="Cancel"
        btn2Func={handleCancel}
      />
      <section
        className={[
          isTopZero ? "background_scroll_down" : "background_scroll_up",
        ].join(" ")}
      >
        <div className="main_wrapper">
          <div className="left_side"></div>
          <div className="edit_content">
            {/* title */}
            <div className="input_title_wrapper">
              <input
                type="text"
                className="h1 input input_title"
                placeholder="Title"
                value={title}
                ref={titleRef}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <Line weight={1} eachClassName="div_line"></Line>
            <div className="diary_info">
              {/* date */}
              <div className="date_wrapper">
                <img src={calendarSrc} className="icon" />
                <p className="body2">Date : </p>
                <div className="info_short_ver body3 start_date">
                  <span className="body3">{year}</span>
                  <span className="body3">년 </span>
                  <span className="body3">{month}</span>
                  <span className="body3">월 </span>
                  <span className="body3">{day}</span>
                  <span className="body3">일 </span>
                </div>
              </div>
              {/* who */}
              <div className="who_wrapper">
                <img src={personSrc} className="icon" />
                <p className="body2">Who : </p>
                <input
                  type="text"
                  className="info_short_ver body3 who"
                  placeholder="Name"
                  ref={whoRef}
                  onChange={(e) => setWho(e.target.value)}
                />
              </div>
              {/* weather */}
              <div className="weather_wrapper">
                <img src={weatherSrc} className="icon" />
                <p className="body2">Weather : </p>
                <div className="weather_icons_wrapper">
                  {weatherList.map((it) => (
                    <WeatherItem
                      key={it.weather_id}
                      {...it}
                      onClick={handleRemote}
                      isSelected={it.weather_id === weather_id}
                    ></WeatherItem>
                  ))}
                </div>
              </div>
            </div>
            <Line weight={1} eachClassName="div_do ted_line"></Line>
            <div className="editor_wrapper">
              {/* eidtor */}
              <div className="editor">
                {/* Add Content */}
                <ContentEditor
                  isEdit={isEdit}
                  content={content}
                  setContent={setContent}
                  contentRaw={contentRaw}
                  setContentRaw={setContentRaw}
                  originData={originData}
                ></ContentEditor>
              </div>
            </div>
          </div>
          <div className="right_side"></div>
        </div>
        <div className="popup_wrapper">
          {visibility === "visible" ? (
            <EmptyPopup
              emptyCus={emptyCus}
              visibility={visibility}
              setVisibility={setVisibility}
            ></EmptyPopup>
          ) : (
            <></>
          )}
        </div>
      </section>
    </div>
  );
};

export default EditorContainer;
