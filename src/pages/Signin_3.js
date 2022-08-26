import { useState, useEffect, useRef } from "react";

import MyButton from "../components/MyButton";
import useTheme from "../util/useTheme";
import Link, { useNavigate } from "react-router-dom";
import axios from "axios";

import "./../App.css";
import "./../css/Signin_3.css";

import spaceVideo from "./../data/space.mp4";
import { motion } from "framer-motion";

const Signin_3 = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [themeMode, toggleTheme] = useTheme();
  const logoBtnSrc =
    themeMode === "light"
      ? process.env.PUBLIC_URL + "/assets/lightLogo.png"
      : process.env.PUBLIC_URL + "/assets/darkLogo.png";

  /*const submit = e => {
    axios
      .post('http://localhost:8080/login', null, {
        params: {
          email: email,
          password: password,
        },
      })
      .then(response => {})
      .catch(function (error) {
        console.log('실패')
      })
  }*/
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
        ease: "easeInOut",
      }}
    >
      <div className="signin_3_bg_test">
        <video muted autoPlay={"autoplay"} preload="auto" loop id="video">
          <source src={"./function.mp4"} type="video/mp4" />
        </video>
        <div className="signin_right_3_test">
          <div className="signin_right_32">
            <img className="x" src={process.env.PUBLIC_URL + "/assets/x.png"} />
            <img
              className="signup_3_logo"
              src={process.env.PUBLIC_URL + "/assets/darkLogo.png"}
            />

            <h1 className="h1">Welcome Back!</h1>

            <section className="email_wrappers">
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

            <section className="pwd_wrappers">
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
                <div className="h3">OR</div>
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
        </div>
      </div>
    </motion.div>
  );
};
export default Signin_3;
