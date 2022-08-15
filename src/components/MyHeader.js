/* components */
import MyButton from "./MyButton";
/* toggle button ani */
import { motion } from "framer-motion";
/* util */
import useTheme from "../util/useTheme";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export const MyHeader = ({
  btn1Type,
  btn1Text,
  btn1Func,
  btn2Type,
  btn2Text,
  btn2Func,
}) => {
  /* for Dark/Light Mode */
  const [themeMode, toggleTheme] = useTheme();
  const logoBtnSrc =
    themeMode === "light"
      ? process.env.PUBLIC_URL + "/assets/lightLogo.png"
      : process.env.PUBLIC_URL + "/assets/darkLogo.png";
  const themeBtnSrc =
    themeMode === "light"
      ? process.env.PUBLIC_URL + "/assets/lightButton.png"
      : process.env.PUBLIC_URL + "/assets/darkButton.png";

  /* for link pages */
  const navigate = useNavigate();

  /* for scroll */
  /* when scroll up -> show Header */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible(prevScrollPos > currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <header
      className={["MyHeader", visible ? "scroll_up" : "scroll_down"].join(" ")}
    >
      <div className="MyHeader_wrapper">
        <div className="head_btn_left">
          <img
            className="logo"
            src={logoBtnSrc}
            onClick={() => navigate("/")}
          />
        </div>
        <div className="head_btn_right">
          <div className="head_btn_right1">
            <motion.img
              src={themeBtnSrc}
              className={["theme_btn", `${themeMode}`].join(" ")}
              onClick={toggleTheme}
              whileTap={{
                opacity: 0,
                rotate: 100,
              }}
              style={{ width: 40, height: 40 }}
            />
          </div>
          <div className="head_btn_right2">
            <MyButton
              className="button"
              type={btn1Type}
              text={btn1Text}
              onClick={btn1Func}
            />
          </div>
          <div className="head_btn_right3">
            <MyButton
              className="button"
              type={btn2Type}
              text={btn2Text}
              onClick={btn2Func}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
