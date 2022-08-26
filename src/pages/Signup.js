import { useState, useEffect, useRef } from "react";

import MyButton from "../components/MyButton";
import useTheme from "../util/useTheme";
import Link, { useNavigate } from "react-router-dom";
import axios from "axios";

import lottie from "lottie-web";

import { motion } from "framer-motion";

import "./../css/Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  const [isOpen, setisOpen] = useState(false);

  const click = () => {
    setisOpen(!isOpen);
  };

  /*const [email,setEData] = useState("");
    const [password,setPData] = useState("");
    const [passwordConfirm,setCData] = useState("");
    const [name,setNData] = useState("");*/
  const [themeMode, toggleTheme] = useTheme();
  const logoBtnSrc =
    themeMode === "light"
      ? process.env.PUBLIC_URL + "/assets/lightLogo.png"
      : process.env.PUBLIC_URL + "/assets/darkLogo.png";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [name, setName] = useState("");
  const axios = require("axios");
  axios.defaults.withCredentials = true;

  const submit = () => {
    axios
      .post("http://localhost:8080/signup", null, {
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        name: name,
      })

      .then(function () {
        navigate("/signingroup");
      })
      .catch(function () {
        console.log("실패함");
      });
  };
  /* axios 
  const axios = require('axios')
  const [dataState, setDataState] = useState();
  
  axios.defaults.withCredentials = true
  const USERS_API_URL = '/feedback/list'
  function getUsers() {
    return axios.get(USERS_API_URL)
  }

  function componentDidMount() {
    getUsers().then(response => {
      console.log(response.data)
      const data = response.data;
      this.setDataState({data});
    })
  }*/
  const likecontainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: likecontainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("./../data/92393-moon.json"),
    });
  }, []);
  //<img  className="signin_logo_2" src={logoBtnSrc}/>
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
      }}
    >
      <div className="Signup">
        <div className="background_signup">
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

                <div className="content_signup">
                  &nbsp;This has been by far one of the most
                  &nbsp;&nbsp;&nbsp;rewarding experience of my life. &nbsp;thank
                  you for letting me part of this
                </div>
              </section>
            </div>
            <div className="signup_right">
              <h1 className="h1" style={{ color: "black" }}>
                Create Account
              </h1>

              <section className="email_wrapper">
                <input
                  className="MyInput caption"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required={true}
                ></input>
                <span>Email</span>
              </section>
              <section className="pwd_wrapper">
                <input
                  className="MyInput"
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  required={true}
                ></input>
                <span>Password</span>
              </section>
              <section className="pwdConfirm_wrapper">
                <input
                  className="MyInput caption"
                  id="passwordConfirm"
                  type="password"
                  name="passwordConfirm"
                  value={passwordConfirm}
                  onChange={(e) => {
                    setPasswordConfirm(e.target.value);
                  }}
                  required={true}
                ></input>
                <span>PasswordConfirm</span>
              </section>

              <section className="name_wrapper">
                <input
                  className="MyInput caption"
                  id="name"
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  required={true}
                ></input>
                <span>Name</span>
              </section>

              <footer className="footer_signup">
                <MyButton
                  type="submit"
                  text={"Sign In"}
                  onClick={() => submit()}
                />
              </footer>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signup;
