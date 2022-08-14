import { useState, useEffect, useRef, useContext } from "react";
/* components */
import { MyHeader } from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import Line from "../components/Line";
/* util */
import useTheme from "../util/useTheme";

const EditDiary = () => {
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

  return (
    <div className="EditDiary">
      <MyHeader
        btn1Type="short"
        btn1Text="Feedback"
        btn1Func={() => navigator("/feedback")}
        btn2Type="short"
        btn2Text="sign In"
        btn2Func={(e) => alert("sign clicked")}
      />
      <div
        className={[
          "main_wrapper",
          isTopZero ? "background_scroll_down" : "background_scroll_up",
        ].join(" ")}
      >
        <div className="left_side"></div>
        <div className="edit_content">
          <div className="input_title_wrapper">
            <input
              type="text"
              className="h1 input input_title"
              placeholder="Title"
            />
          </div>
          <Line weight={1} eachClassName="div_line"></Line>
          <div className="diary_info">
            <div className="date">
              <img src={calendarSrc} className="icon" />
              <p className="body2">Date</p>
            </div>
            <div className="who">
              <img src={personSrc} className="icon" />
              <p className="body2">Who</p>
            </div>
            <div className="weather">
              <img src={weatherSrc} className="icon" />
              <p className="body2">Weather</p>
            </div>
          </div>
          <Line weight={1} eachClassName="div_dotted_line"></Line>
          <div className="input_content_wrapper">
            <textarea
              type="text"
              className="body1 input input_content"
              placeholder="content"
            ></textarea>
          </div>
        </div>
        <div className="right_side"></div>
      </div>
    </div>
  );
};

export default EditDiary;
