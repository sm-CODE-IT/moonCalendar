import "../App.css";
import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  Component,
} from "react";

// cal modules
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; //기본 달력을 그리기 위한 플러그인 - 설치해야함!
import interactionPlugin from "@fullcalendar/interaction"; //이벤트,클릭,드래그 등의 기능을 이용하기 위한 플러그인
import { useNavigate } from "react-router-dom";

import MyButton from "../components/MyButton";
import MyHeader from "../components/MyHeader";
import Line from "../components/Line";

function Calendar() {
  const [isOpenPopup, setisOpenPopup] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [input, setInput] = useState("");

  const toggle = () => {
    setisOpenPopup(!isOpenPopup);
  };
  const click = () => {
    setisOpen(!isOpen);
  };
  // 페이지 별 타이틀 수정하기
  useEffect(() => {
    const titleElem = document.getElementsByTagName("title")[0];
    titleElem.innerHTML = `calendar`;
  }, []);
  var thediv = document.getElementsByTagName("table")[0];

  /*var images = ["/public/assets/calendar1.png", "/public/assets/calendar2.png", "/public/assets/calendar3.png",
 "/public/assets/calendar4.png","/public/assets/calendar5.png","/public/assets/calendar6.png",
 "/public/assets/calendar7.png","/public/assets/calendar8.png","/public/assets/calendar9.png","/public/assets/calendar10.png"]
 var num = images[Math.floor(Math.random() * images.length)];
 document.getElementsByTagName('table')[0].style.backgroundImage ='url("'+images[num] + '")';
*/
  const navigate = useNavigate();
  //const diaryList = useContext(DiaryStateContext);

  //DiaryList에 일기가 존재하는지 아닌지 판별하는 함수
  /*const isUnion = dateClickInfo => {
    let isDif = true
    FinDiary.forEach(it => {
      if (it.date === dateClickInfo.dateStr) {
        isDif = false
      }
    })
    if (isDif) {
      return true
    } else {
      return false
    }
  }*/

  return (
    <div className="Calendar">
      <MyHeader
        btn1Type="Feedback"
        btn1Text="Feedback"
        btn1Func={click}
        btn2Type="sign"
        btn2Text="sign"
        btn2Func={toggle}
      />

      <section className="calendar">
        <button onClick={() => navigate(`/finDiary/2022-08-08`)}>
          goDetail
        </button>
        <Line weight={5} style={{ margin: 20 }}></Line>
        <Line weight={3} eachClassName={"home_line"}></Line>
        <div className="start">
          <FullCalendar
            className="fullcalendar"
            eventColor="white"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable="false" //이벤트,드래그 등의 편집 기능 활용여부
            top="130px "
            height="150vh"
            width="150vh"
            dayMaxEvents="1"
            dateClick={(dateClickInfo) => {
              /* if (isUnion(dateClickInfo)) {
                navigate(`./new/${dateClickInfo.dateStr}`)
              }
            }}*/
              navigate(`/NewDiary/${dateClickInfo.dateStr}`);
            }}
            eventMouseEnter={(mouseEnterInfo) => {
              mouseEnterInfo.el.style.cssText =
                "transform: scaleX(1.4) scaleY(1.2);";
              mouseEnterInfo.el.style.transition =
                "1s cubic-bezier(0, 0.83, 0.58, 1.25)";
            }}
            eventMouseLeave={(mouseLeaveInfo) => {
              mouseLeaveInfo.el.style.cssText = "transform:scale(1.0);";
              mouseLeaveInfo.el.style.transition =
                "1s cubic-bezier(0, 0.83, 0.58, 1.25)";
            }}
            //eventContent={renderEventContent} //이벤트 내용 커스텀
            headerToolbar={{
              //헤드 툴바
              start: "prev",
              center: "title",
              end: `next`,
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default Calendar;
