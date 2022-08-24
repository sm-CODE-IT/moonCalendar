import "../css/FinDiary.css";
import ".././css/WeatherItem.css";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { DiaryStateContext } from "../App";
/* components */
import MyHeader from ".././components/MyHeader";
import Line from "../components/Line";
import EditorDiary from "../components/EditorContainer";
/* utils */
import { weatherList } from "../util/weatherList";
import { DiaryDispatchContext } from ".././App";

const FinDiary = () => {
  const { date } = useParams();
  const diaryList = useContext(DiaryStateContext);
  const { onRemove } = useContext(DiaryDispatchContext);
  const navigate = useNavigate();

  /* find target diary */
  const [data, setData] = useState();
  console.log(diaryList.length);
  useEffect(() => {
    if (diaryList.length >= 1) {
      const targetDiary = diaryList.find((it) => it.date === date);

      if (targetDiary) {
        setData(targetDiary);
      } else {
        alert("없는 일기입니다.");
        navigate("/calendar", { replace: true });
      }
    }
  }, [data, diaryList]);

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

  if (!data) {
    return <div className="DiaryPage">로딩중입니다,,,</div>;
  } else {
    /* date */
    const dateStr = data.date;
    const [year, month, day] = dateStr.split("-");

    /* weather */
    const curWeatherData = weatherList.find(
      (it) => parseInt(it.weather_id) === parseInt(data.weather_id)
    );
    const weather_img =
      process.env.PUBLIC_URL +
      `/assets/${themeMode}${curWeatherData.weather_descript}.png`;

    /* content */
    const contentHTML = data.content;

    /* Delete */
    const handleRemove = () => {
      if (window.confirm("정말 삭제하시겠습니까?")) {
        onRemove(data.date);
        navigate("/calendar", { replace: true });
      }
    };

    return (
      <div className="FinDiary">
        <MyHeader
          btn1Type="short"
          btn1Text="Edit"
          btn1Func={() => navigate(`/editDiary/${data.date}`)}
          btn2Type="short red"
          btn2Text="Delete"
          btn2Func={handleRemove}
        ></MyHeader>
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
                <div className="h1">{data.title}</div>
              </div>
              <Line weight={1} eachClassName="div_line"></Line>
              <div className="diary_info">
                {/* date */}
                <div className="date_wrapper">
                  <img src={calendarSrc} className="icon" />
                  <p className="body2">Date : </p>
                  <div className="info_short_ver body3">
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
                  <span className="body3">{data.who}</span>
                </div>
                {/* weather */}
                <div className="weather_wrapper">
                  <img src={weatherSrc} className="icon" />
                  <p className="body2">Weather : </p>
                  <div className="weather_icons_wrapper">
                    <div className="descript_wrapper">
                      <p className="body2">{curWeatherData.weather_descript}</p>
                    </div>
                    <div className="img_wrapper">
                      <img src={weather_img} alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <Line weight={1} eachClassName="div_do ted_line"></Line>
              <div className="editor_wrapper">
                {/* eidtor */}
                <div className="editor">
                  {/* Add Content */}
                  <div
                    className="content_wrapper"
                    dangerouslySetInnerHTML={{ __html: contentHTML }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="right_side"></div>
          </div>
        </section>
      </div>
    );
  }
};

export default FinDiary;
