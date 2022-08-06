/* components */
import MyButton from "./MyButton";
/* toggle button ani */
import { motion } from "framer-motion";

const MyHeader = ({
  btn1Type,
  btn1Text,
  btn1Func,
  btn2Type,
  btn2Text,
  btn2Func,
}) => {
  const setTheme = (theme) => (document.documentElement.className = theme);

  return (
    <header>
      <div className="head_btn_left">
        <img src=".././assets/lightLogo.png" />
        <img src=".././assets/darkLogo.png" />
      </div>
      <div className="head_btn_right">
        <div className="head_btn_right1">
          <div>
            <motion.button
              className="theme-btn light"
              onClick={() => setTheme("dark")}
              whileTap={{ opacity: 0, rotate: 70, transition: { duration: 8 } }}
              title="Light mode"
            >
              <img src=".././assets/lightButton.png" />
            </motion.button>
            <motion.button
              className="theme-btn dark"
              onClick={() => setTheme("light")}
              whileTap={{ opacity: 0, rotate: 70, transition: { duration: 8 } }}
              title="Dark mode"
            >
              <img src=".././assets/darkButton.png" />
            </motion.button>
          </div>
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
