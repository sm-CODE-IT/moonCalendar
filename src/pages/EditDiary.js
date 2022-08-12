import { useState, useEffect } from "react";

/* components */
import MyHeader from "../components/MyHeader";
import MyFooter from "../components/MyFooter";
import Line from "../components/Line";

const EditDiary = () => {
  /* for scroll */
  /* when scroll up -> show Header */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTopZero, setisTopZero] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setisTopZero(prevScrollPos <= currentScrollPos);
    setPrevScrollPos(currentScrollPos);
    console.log(isTopZero);
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
          <div className="input_content_wrapper">
            <teatarea
              type="text"
              className="body1 input input_content"
              placeholder="content"
            ></teatarea>
          </div>
        </div>
        <div className="right_side"></div>
      </div>
    </div>
  );
};

export default EditDiary;
