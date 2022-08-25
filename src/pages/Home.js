/* components */
import MyFooter from '../components/MyFooter'
import MyHeader from '../components/MyHeader'
import Line from '../components/Line'
/* hooks */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import SigninGroup from './SigninGroup'

import ImageOne from '../components/ImageOne'
import ImageTwo from '../components/ImageTwo'
import ImageThree from '../components/ImageThree'
import TextBox from '../components/TextBox'
const Home = () => {
  const [isOpenPopup, setisOpenPopup] = useState(false)
  const [isOpen, setisOpen] = useState(false)

  const toggle = () => {
    setisOpenPopup(!isOpenPopup)
  }

  const navigator = useNavigate()
  /* for scroll */
  /* when scroll up -> show Header */
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [isTopZero, setisTopZero] = useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset
    setisTopZero(prevScrollPos <= currentScrollPos)
    setPrevScrollPos(currentScrollPos)
    console.log(isTopZero)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScrollPos, isTopZero, handleScroll])

  return (
    <div className="Home">
      <MyHeader
        btn1Type="short"
        btn1Text="Feedback"
        btn1Func={() => navigator('/feedback')}
        btn2Type="short"
        btn2Text="sign In"
        btn2Func={toggle}
      />
      {/*   
       <div
        className={[
          'home_background_wrapper',
          isTopZero ? 'background_scroll_down' : 'background_scroll_up',
        ].join(' ')}
      > 
     */}

      <section>
        {isOpenPopup && (
          <SigninGroup toggle={(toggle, isOpenPopup, setisOpenPopup)} />
        )}
        <div className="main">
          <Line weight={5} eachClassName={'home_line'}></Line>
          <Line weight={3} eachClassName={'home_line'}></Line>

          <ImageOne />
          <TextBox />
          <Line weight={3} eachClassName={'home_line'}></Line>
          <ImageTwo />
          <Line weight={3} eachClassName={'home_line'}></Line>
          <Line weight={5} eachClassName={'home_line'}></Line>
          <ImageThree />
        </div>
      </section>
      <div className="videocontainer">
        <video muted autoPlay={'autoplay'} preload="auto" loop id="videoplay">
          <source src={'./function.mp4'} type="video/mp4" />
        </video>
      </div>

      <MyFooter></MyFooter>
    </div>
  )
}

export default Home
