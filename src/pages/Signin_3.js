import { useState, useEffect, useRef } from 'react'

import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import useTheme from '../util/useTheme'
import Link, { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './../App.css'
import lottie from 'lottie-web'
import Lottie from 'react-lottie-player'

import lottieJson from './96849-astronaut-in-space.json'
import spaceVideo from './space.mp4'
import { motion } from 'framer-motion'

const Signin_3 = () => {
  const navigate = useNavigate()
  const [state, setState] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  })
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
  const changeText = e => {
    const { name, value } = e.target
    setState({
      ...input,
      [name]: value,
    })
  }

  const initialState = {
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  }
  const reset = () => {
    setState(() => initialState)
  }

  const { email, password, passwordConfirm, name } = state
  const submit = e => {
    e.preventDefault()
    const profile = {
      email: state.email,
      password: state.password,
      passwordConfirm: state.passwordConfirm,
      name: state.name,
    }
    axios({
      url: 'http://localhost:8080/signup',
      method: 'post',
    }).then(response => {
      if (response.data != null) {
        this.setState(this.initialState)
        alert('saved successfully')
      }
    })
  }

  return (
    <motion.div
      className="signup_3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <div className="signin_3_bg_test">
        <video muted autoPlay={'autoplay'} preload="auto" loop id="video">
          <source src={spaceVideo} type="video/mp4" />
        </video>
        <div className="signin_right_3_test">
          <div className="signin_right_32">
            <img
              className="signup_3_logo"
              src={process.env.PUBLIC_URL + '/assets/darkLogo.png'}
            />
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
                onChange={changeText}
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
                <span className="line_3" style={{ width: '13rem' }}></span>
                <div className="h3">OR</div>
                <span className="line_3" style={{ width: '13rem' }}></span>
              </div>
              <div className="social">
                <a href={'/oauth2/authorization/google'} role="button">
                  <img
                    className="google"
                    src={'.././assets/Google.png'}
                    alt=""
                  />
                </a>
                <a href={'/oauth2/authorization/naver'} role="button">
                  <img
                    className="naver"
                    src={'.././assets/NavorIcon.png'}
                    alt=""
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
    </motion.div>
  )
}
export default Signin_3
