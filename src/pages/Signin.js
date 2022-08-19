import { useState, useEffect, useRef } from 'react'

import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import useTheme from '../util/useTheme'
import Link, { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Lottie from 'react-lottie-player'

import lottie from 'lottie-web'
import { signin } from '../service/ApiService'
import { motion } from 'framer-motion'

const Signin = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [input, setInput] = useState('')
  const [message, setMessage] = useState('')
  /*const [email,setEData] = useState("");
    const [password,setPData] = useState("");
    const [passwordConfirm,setCData] = useState("");
    const [name,setNData] = useState("");*/
  const [themeMode, toggleTheme] = useTheme()
  const logoBtnSrc =
    themeMode === 'light'
      ? process.env.PUBLIC_URL + '/assets/lightLogo.png'
      : process.env.PUBLIC_URL + '/assets/darkLogo.png'

  const handleSubmit = (event, state) => {
    event.preventDefault()
    const data = new FormData(event.target)
    email = data.get('email')
    password = data.get('password')
    // ApiService의 signin 메서드를 사용 해 로그인.
    signin({ email: email, password: password })
  }
  const changeText = e => {
    setEmail(e.target.value)
  }
  const changeText_2 = e => {
    setPassword(e.target.value)
  }
  const handleLogin = e => {
    window.location.href = `/oauth2/authorization/google}`
  }
  const likecontainer = useRef()
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('./92393-moon.json'),
    })
  }, [])

  return (
    <motion.div
      className="signup_3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <form action="/user/signup" method="post">
        <div className="background">
          <div className="popupbox_2">
            <div className="signin_left_2">
              <div className="logo">
                <img className="signup_logo" src={logoBtnSrc} />
                <h2 className="h2">MoonCalendar</h2>
              </div>
              <section className="animation">
                <div className="anima_back">
                  <div className="anima">
                    <div className="anima" ref={likecontainer}></div>
                  </div>
                </div>

                <div className="content">
                  &nbsp;This has been by far one of the most
                  &nbsp;&nbsp;&nbsp;rewarding experience of my life. &nbsp;thank
                  you for letting me part of this
                </div>
              </section>
            </div>
            <div className="signin_right">
              <h1 className="h1">Welcome Back!</h1>

              <section className="email_wrapper">
                <MyInput
                  className="MyInput caption"
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={changeText}
                  required={true}
                ></MyInput>
              </section>
              <section className="pwd_wrapper">
                <MyInput
                  className="MyInput"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={changeText_2}
                  required={true}
                ></MyInput>
              </section>
              <div>
                <div className="submit_signin">
                  <MyButton
                    className="submit_button"
                    text={'Submit'}
                    type="submit"
                  />
                </div>

                <div className="or">
                  <span className="line_3" style={{ width: '13rem' }}></span>OR
                  <span className="line_3" style={{ width: '13rem' }}></span>
                </div>
                <div className="social">
                  <img
                    className="google"
                    src={'.././assets/Google.png'}
                    alt=""
                    onClick={handleLogin}
                  />
                  \
                  <a href="/oauth2/authorization/naver">
                    <img
                      className="naver"
                      src={'.././assets/NavorIcon.png'}
                      alt=""
                      onClick={{}}
                    />
                  </a>
                </div>
              </div>
              <footer>
                <p className="signin">
                  <div
                    className="caption"
                    onClick={() => navigate('./signupgroup')}
                    style={{ whiteSpace: 'nowrap', color: 'black' }}
                  >
                    아직 회원이 아니신가요? 회원가입
                  </div>
                </p>
              </footer>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default Signin
