import { useState, useEffect, useRef } from 'react'

import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import useTheme from '../util/useTheme'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import './../App.css'
import './../css/Signup_3.css'
import spaceVideo from './../data/space.mp4'

import { motion } from 'framer-motion'

const Signup_3 = () => {
  const navigate = useNavigate()

  const [email, setEData] = useState('')
  const [password, setPData] = useState('')
  const [passwordConfirm, setCData] = useState('')
  const [name, setNData] = useState('')
  const [themeMode, toggleTheme] = useTheme()
  const logoBtnSrc =
    themeMode === 'light'
      ? process.env.PUBLIC_URL + '/assets/lightLogo.png'
      : process.env.PUBLIC_URL + '/assets/darkLogo.png'

  /*const submit = () => {
    axios
      .post('http://localhost:8080/signup', null, {
        params: {
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
          name: name,
        },
      })
      .catch(function () {
        console.log('실패함')
      })
  }*/
  const axios = require('axios')
  axios.defaults.withCredentials = true

  const submit = () => {
    axios
      .post('http://localhost:8080/signup', null, {
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        name: name,
      })

      .then(function () {
        navigate('/signingroup')
      })
      .catch(function () {
        console.log('실패함')
      })
  }
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 2,
      }}
      exit={{
        opacity: 1,
        ease: 'easeInOut',
      }}
    >
      <div className="signup_3_bg_test">
        <video muted autoPlay={'autoplay'} preload="auto" loop id="video">
          <source src={spaceVideo} type="video/mp4" />
        </video>

        <div className="signup_right_3">
          <div className="signup_right_32">
            <img className="signup_3_logo" src={logoBtnSrc} />

            <h1 className="h1">Create Account</h1>

            <section className="email_wrappers">
              <input
                className="MyInput caption"
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={e => setEData(e.target.value)}
                required={true}
              ></input>
              <span>Email</span>
            </section>
            <section className="pwd_wrappers">
              <input
                className="MyInput"
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={e => setPData(e.target.value)}
                required={true}
              ></input>
              <span>Password</span>
            </section>
            <section className="pwdConfirm_wrappers">
              <input
                className="MyInput caption"
                id="passwordConfirm"
                type="password"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={e => setCData(e.target.value)}
                required={true}
              ></input>
              <span>PasswordConfirm</span>
            </section>

            <section className="names_wrapper">
              <input
                className="MyInput caption"
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={e => setNData(e.target.value)}
                required={true}
              ></input>
              <span>Name</span>
            </section>

            <footer className="footer_signup">
              <MyButton
                onClick={() => submit()}
                type="submit"
                text={'Sign In'}
              />
            </footer>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
export default Signup_3
