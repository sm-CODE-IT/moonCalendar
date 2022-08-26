import { useState, useEffect, useRef } from "react";

import MyButton from "../components/MyButton";
import useTheme from "../util/useTheme";
import Link, { useNavigate } from "react-router-dom";

import lottie from "lottie-web";
import { motion } from "framer-motion";

import axios from "axios";

import "./../css/Signin.css";
import "./../App.css";
const Signin = ({ toggle }) => {
  const navigate = useNavigate();
  const [change, setChange] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  /*const [email,setEData] = useState("");
    const [password,setPData] = useState("");
    const [passwordConfirm,setCData] = useState("");
    const [name,setNData] = useState("");*/
  const [themeMode, toggleTheme] = useTheme();
  const logoBtnSrc =
    themeMode === "light"
      ? process.env.PUBLIC_URL + "/assets/lightLogo.png"
      : process.env.PUBLIC_URL + "/assets/darkLogo.png";

  /*
  const handleSubmit = (event, state) => {
    event.preventDefault()
    const data = new FormData(event.target)
    email = data.get('email')
    password = data.get('password')
    // ApiService의 signin 메서드를 사용 해 로그인.
    signin({ email: email, password: password })
  }*/
  const changeText = (e) => {
    setEmail(e.target.value);
  };
  const changeText_2 = (e) => {
    setPassword(e.target.value);
  };
  const handleLogin = (e) => {
    window.location.href = `/oauth2/authorization/google}`;
  };
  const axios = require("axios");
  axios.defaults.withCredentials = true;

  const checkInfo = () => {
    axios
      .post("http://localhost:8080/signup", null, {
        email: email,
        password: password,
      })
      .catch(function () {
        console.log("실패함");
      })
      .then(function () {
        navigate("/calendar");
      });
  };

  const googleLogin = () => {
    axios
      .post("http://localhost:8080/login/oauth2/code/google", null, {})
      .then(function () {
        navigate("/calendar");
      })
      .catch(function () {
        console.log("실패");
      });
  };
  const naverLogin = () => {
    axios
      .post("http://localhost:8080/login/oauth2/code/naver", null, {})
      .then(function () {
        navigate("/calendar");
      })
      .catch(function () {
        console.log("실패");
      });
  };
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
  const client_Id =
    "395210306652-ok9o74f4bf1ejkenucpa8ma04kbnl8pu.apps.googleusercontent.com";
  const responseGoogle = (response) => {
    console.log(response);
  };
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
      <div className="Signin">
        <div className="background">
          <div className="popupbox_2">
            <div className="signin_left_2">
              <div className="logo">
                <img className="signup_logo" src={logoBtnSrc} />
                <h2 className="h2">MoonCalendar</h2>
              </div>
              <section className="animation">
                <div className="anima_back">
                  <div className="anima" ref={likecontainer}></div>
                </div>

                <div className="content_signin" style={{ color: "white" }}>
                  &nbsp;This has been by far one of the most
                  &nbsp;&nbsp;&nbsp;rewarding experience of my life. &nbsp;thank
                  you for letting me part of this
                </div>
              </section>
            </div>

            <div className="signin_right">
              <h1 className="h1" style={{ color: "black" }}>
                Welcome Back!
              </h1>

              <div className="email_wrapper">
                <input
                  className="MyInput caption"
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={changeText}
                  required="required"
                ></input>
                <span>Email</span>
              </div>

              <section className="pwd_wrapper">
                <input
                  className="MyInput"
                  id="password"
                  type="password"
                  name="password"
                  value={password}
                  onChange={changeText_2}
                  required={true}
                ></input>
                <span>Password</span>
              </section>
              <div>
                <div className="submit_signin">
                  <MyButton
                    className="submit_button"
                    text={"Submit"}
                    type="submit"
                    onClick={() => checkInfo()}
                  />
                </div>

                <div className="or">
                  <span className="line_3" style={{ width: "13rem" }}></span>
                  <p style={{ color: "black" }}>OR</p>
                  <span className="line_3" style={{ width: "13rem" }}></span>
                </div>
                <div className="social">
                  <img
                    className="google"
                    src={".././assets/Google.png"}
                    alt=""
                    onClick={() => googleLogin()}
                  />
                  <img
                    className="naver"
                    src={".././assets/NavorIcon.png"}
                    alt=""
                    onClick={() => naverLogin()}
                  />
                </div>
              </div>
              <footer>
                <p className="signin">
                  <div
                    className="caption"
                    onClick={() => navigate("./signupgroup")}
                    style={{ whiteSpace: "nowrap", color: "black" }}
                  >
                    아직 회원이 아니신가요? 회원가입
                  </div>
                </p>
              </footer>
            </div>

            <img
              src={process.env.PUBLIC_URL + "/assets/x.png"}
              onClick={() => toggle()}
              className="x"
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Signin;
