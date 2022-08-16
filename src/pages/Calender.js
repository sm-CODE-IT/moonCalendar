import '.././App.css'
import React, {
  useContext,
  useEffect,
  useState,
  useMemo,
  Component,
} from 'react'

// call modules
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' //기본 달력을 그리기 위한 플러그인
import interactionPlugin from '@fullcalendar/interaction' //이벤트,클릭,드래그 등의 기능을 이용하기 위한 플러그인
import { useNavigate } from 'react-router-dom'
/*설치해야할 모듈!!
터미널 창에 다음 명령어 입력 => 
  npm i @fullcalendar/react, @fullcalendar/daygrid, @fullcalendar/interaction,
 react-router-dom, framer-motion

*/
import MyHeader from '.././components/MyHeader'
import Line from '.././components/Line'

function App() {
  const [isOpenPopup, setisOpenPopup] = useState(false)
  const [isOpen, setisOpen] = useState(false)
  const [input, setInput] = useState('')

  const toggle = () => {
    setisOpenPopup(!isOpenPopup)
  }
  const click = () => {
    setisOpen(!isOpen)
  }
  //페이지 별 타이틀 수정
  useEffect(() => {
    const titleElem = document.getElementsByTagName('title')[0]
    titleElem.innerHTML = `calendar`
  }, [])
  var thediv = document.getElementsByTagName('table')[0]

  const navigate = useNavigate()

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
        <Line weight={5} style={{ margin: 20 }}></Line>
        <Line weight={3} eachClassName={'home_line'}></Line>
        <div className="start">
          <FullCalendar //달력 생성을 위한 라이브러리
            className="fullcalendar"
            eventColor="white"
            plugins={[dayGridPlugin, interactionPlugin]}
            initialView="dayGridMonth"
            editable="false"
            top="130px "
            height="150vh"
            width="150vh"
            dayMaxEvents="1"
            dateClick={dateClickInfo => {
              //특정 날짜의 셀을 클릭하면 editdiary로 이동
              navigate(`/EditDiary/${dateClickInfo.dateStr}`)
            }}
            headerToolbar={{
              start: 'prev',
              center: 'title',
              end: `next`,
            }}
          />
        </div>
      </section>
    </div>
  )
}

export default App
