/* components */
import MyButton from "./MyButton";
/* toggle button ani */
import { motion } from "framer-motion";
/* util */
import useTheme from "../util/useTheme";

const MyHeader = ({
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

  return (
    <header className="MyHeader">
      <div className="head_btn_left">
        <img className="logo" src={logoBtnSrc} />
      </div>
      <div className="head_btn_right">
        <div className="head_btn_right1">
          <motion.img
            src={themeBtnSrc}
            className={["theme_btn", `${themeBtnSrc}`].join(" ")}
            onClick={toggleTheme}
            whileTap={{
              opacity: 0,
              rotate: 100,
            }}
            style={{ width: 50, height: 50 }}
          />
          {/* <div>
            <motion.button
              className="theme-btn light"
              onClick={() => setTheme("dark")}
              whileTap={{ opacity: 0, rotate: 70, transition: { duration: 8 } }}
              title="Light mode"
            >
              <img src={"/assets/lightButton.png"} />
            </motion.button>
            <motion.button
              className="theme-btn dark"
              onClick={() => setTheme("light")}
              whileTap={{ opacity: 0, rotate: 70, transition: { duration: 8 } }}
              title="Dark mode"
            >
              <img src={"/assets/darkButton.png"} />
            </motion.button>
          </div> */}
        </div>
        <div className="head_btn_right2">
          <MyButton type={btn1Type} text={btn1Text} onClick={btn1Func} />
        </div>
        <div className="head_btn_right3">
          <MyButton type={btn2Type} text={btn2Text} onClick={btn2Func} />
        </div>
      </div>
    </header>
  );
};

export default MyHeader;
