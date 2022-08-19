import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  useCallback,
} from "react";
// import ReactDOM from "react-dom";
/* components */
import { MyHeader } from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import Line from "../components/Line";
import WeatherItem from "../components/WeatherItem";
import EditorContainer from "../components/EditorContainer";
/* util */
import useTheme from "../util/useTheme";
import { useNavigate, useParams } from "react-router-dom";
import { DiaryDispatchContext } from "../App";
import { weatherList } from "../util/weatherList";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";

const EditDiary = () => {
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
  /* for scroll */
  /* when scroll up -> show Header */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTopZero, setisTopZero] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setisTopZero(prevScrollPos <= currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isTopZero, handleScroll]);

  /* title */
  const titleRef = useRef();
  const [title, setTitle] = useState("");

  /* date */
  const startDateRef = useRef();
  const [date, setDate] = useState(useParams());
  const [year, month, day] = date.date.split("-");

  /* who */
  const whoRef = useRef();
  const [who, setWho] = useState("");

  /* weather */
  const [weather, setWeather] = useState(1);
  const handleRemote = useCallback((weather) => {
    setWeather(weather);
  }, []);

  /* total content */
  const contentRef = useRef();
  const [content, setContent] = useState("");
  const [editorState, setEditorState] = React.useState(() =>
    EditorState.createEmpty()
  );

  /* Submit */
  const { onCreate } = useContext(DiaryDispatchContext);
  const handleSubmit = () => {
    if (title.length < 1) {
      titleRef.current.focus();
      return;
    }

    if (content.length < 1) {
      contentRef.current.focus();
      return;
    }

    if (window.confirm("작성을 완료하시겠습니까?")) {
      onCreate(title, date, who, weather, content);
    }

    navigate("/calendar", { replace: true });
  };

  /* Cancel */
  const handleCancel = () => {
    if (
      window.confirm(
        "작성 중인 내용이 저장되지 않을 수 있습니다. 취소하시겠습니까?"
      )
    ) {
      navigate(-1);
    }
  };
  return (
    <div className="EditDiary">
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
              <div className="date_wrapper">
                <img src={calendarSrc} className="icon" />
                <p className="body2">Date : </p>
                <div className="info_short_ver body3 start_date">
                  <span className="hand_write">{year}</span>
                  <span className="default_write">년 </span>
                  <span className="hand_write">{month}</span>
                  <span className="default_write">월 </span>
                  <span className="hand_write">{day}</span>
                  <span className="default_write">일 </span>
                </div>
              </div>
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
              <div className="weather_wrapper">
                <img src={weatherSrc} className="icon" />
                <p className="body2">Weather : </p>
                <div className="weather_icons_wrapper">
                  {weatherList.map((it) => (
                    <WeatherItem
                      key={it.weather_id}
                      {...it}
                      onClick={handleRemote}
                      isSelected={it.weather_id === weather}
                    ></WeatherItem>
                  ))}
                </div>
              </div>
            </div>
            <Line weight={1} eachClassName="div_do ted_line"></Line>
            <div className="input_content_wrapper">
              {/* Add Content */}
              <EditorContainer></EditorContainer>
            </div>
          </div>
          <div className="right_side"></div>
        </div>
      </section>
    </div>
  );
};

export default EditDiary;