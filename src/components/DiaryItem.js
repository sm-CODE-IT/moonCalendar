import { useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { DiaryThemeStateContext } from "../App";

const DiaryItem = ({ source }) => {
  const [dataStr, imgSrc] = source.split(" ");
  const { themeMode } = useContext(DiaryThemeStateContext);
  if (imgSrc !== "undefined") {
    console.log("true");
  }
  const navigate = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => navigate(`../finDiary/${dataStr}`)}
        className=".fc-daygrid-day-event"
      >
        {imgSrc !== "undefined" ? (
          <img src={process.env.PUBLIC_URL + `${imgSrc}`} alt="" />
        ) : (
          <img
            src={process.env.PUBLIC_URL + `./assets/background_4.jpg`}
            alt=""
          />
        )}
      </div>
    </div>
  );
};

export default DiaryItem;
