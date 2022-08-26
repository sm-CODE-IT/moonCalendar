const MyFooter = () => {
  rimport lottie from 'lottie-web'
import { useState, useEffect, useRef } from 'react'

import './../css/MyFooter.css'

const MyFooter = () => {
  const container2 = useRef()
  useEffect(() => {
    lottie.loadAnimation({
      container: container2.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./../pages/moon_city.json'),
    })
  }, [])

  return (
    <div className="MyFooter">
      <div className="Footer">
        <section>
          <br />
          <p className="title1">Need Help? Write Feedback</p>
          <img
            src={process.env.PUBLIC_URL + '/assets/githubs.png'}
            className="github"
          />
          <p className="title1">sm-CODE-IT/moonCalendar</p>
          <p className="title1">김민희 | 김정윤 | 손수경 | 윤소영</p>
        </section>
        <div className="lottie-bg" ref={container2}></div>
      </div>
    </div>
  )
}

export default MyFooter
