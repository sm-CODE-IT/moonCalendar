import { useNavigate } from "react-router-dom";
import React from "react";

const DiaryItem = ({ img_src, date }) => {
  img_src = process.env.PUBLIC_URL + `./assets/background_4.png`;
  console.log(date);
  const navigate = useNavigate();
  return (
    <div className="DiaryItem">
      <div
        onClick={() => navigate(`../finDiary/${date}`)}
        className=".fc-daygrid-day-event"
      >
        <img
          src={process.env.PUBLIC_URL + `./assets/background_2.jpg`}
          alt=""
        />
      </div>
    </div>
  );
};

export default DiaryItem;
