import { useState, useEffect, useRef } from 'react'

import MyButton from '../components/MyButton'
import MyInput from '../components/MyInput'
import useTheme from '../util/useTheme'
import Link, { useNavigate } from 'react-router-dom'
import axios from 'axios'

import lottie from 'lottie-web'

import { motion } from 'framer-motion'

const Signup = () => {
  const navigate = useNavigate()

  const [isOpen, setisOpen] = useState(false)

  const click = () => {
    setisOpen(!isOpen)
  }

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
  //<img  className="signin_logo_2" src={logoBtnSrc}/>
  return (
    <motion.div
      className="signup_3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <form onSubmit={submit} action="/user/signup" method="post">
        <div className="Signup">
          <div className="background">
            <div className="popupbox_2">
              <div className="signup_left">
                <div className="logo">
                  <img className="signup_logo" src={logoBtnSrc} />
                  <h2 className="h3">MoonCalendar</h2>
                </div>
                <section className="animation">
                  <div className="anima_back">
                    <div className="anima" ref={likecontainer}></div>
                  </div>

                  <div className="content">
                    &nbsp;This has been by far one of the most
                    &nbsp;&nbsp;&nbsp;rewarding experience of my life.
                    &nbsp;thank you for letting me part of this
                  </div>
                </section>
              </div>
              <div className="signup_right">
                <h1 className="h1">Create Account</h1>

                <section>
                  <p className="input_text caption">Email</p>
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
                <section>
                  <p className="input_text caption">Password</p>
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
                <section>
                  <p className="input_text caption">Confirm</p>
                  <MyInput
                    className="MyInput caption"
                    id="passwordConfirm"
                    type="password"
                    name="passwordConfirm"
                    value={passwordConfirm}
                    onChange={changeText}
                    placeholder="PasswordConfirm"
                    required={true}
                  ></MyInput>
                </section>

                <section>
                  <p className="input_text caption">Name</p>
                  <MyInput
                    className="MyInput caption"
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={name}
                    onChange={changeText}
                    required={true}
                  ></MyInput>
                </section>

                <footer className="footer_signup">
                  <MyButton onClick={submit} type="submit" text={'Sign In'} />
                </footer>
              </div>
            </div>
          </div>
        </div>
      </form>
    </motion.div>
  )
}

export default Signup
