import "../css/Home.css";
import lottie from "lottie-web";
/* components */
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import Line from "../components/Line";
import { DiaryThemeStateContext } from "../App";
/* hooks */
import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const navigate = useNavigate();
  /* for scroll */
  /* when scroll up -> show Header */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTopZero, setisTopZero] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setisTopZero(prevScrollPos <= currentScrollPos);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isTopZero, handleScroll]);

  // const helloContainer = useRef();
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: helloContainer.current,
  //     renderer: "svg",
  //     rendererSettings: {
  //       mount: false,
  //     },
  //     loop: 1,
  //     autoplay: true,
  //     animationData: require("../data/lightHello.json"),
  //   });
  // }, []);
  /* motion */

  // Variants for Container of words.
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  // Variants for each word.
  const child = {
    visible: {
      opacity: 1,
      y: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  /* animation lottie */
  // const handScrollSrc =
  const handScrollContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: handScrollContainer.current,
      renderer: "svg",
      rendererSettings: {
        mount: true,
      },
      loop: true,
      autoplay: true,
      animationData: require(`.././data/Scroll.json`),
    });
  }, []);

  return (
    <div className="Home">
      <MyHeader
        btn1Type="short"
        btn1Text="Feedback"
        btn1Func={() => navigate("/feedback")}
        btn2Type="short"
        btn2Text="sign In"
        btn2Func={(e) => navigate("/calendar")}
      />
      {/* <div
        className={[
          "home_background_wrapper",
          isTopZero ? "background_scroll_down" : "background_scroll_up",
        ].join(" ")}
      >
    </div> */}
      <section>
        <div className="first_page_wrapper">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="main"
          >
            {/* <div className="lottieHello" ref={helloContainer}></div> */}
            <motion.div variants={child} className="h1 title text_wrapper">
              Moon
              <span className="colored"> Calendar</span>
            </motion.div>
            <motion.div
              variants={child}
              className="title2 sub_title text_wrapper"
            >
              Use the MoonCalendar to <span className="colored">record</span>{" "}
              your memories
            </motion.div>
          </motion.div>
        </div>
        <div className="lottie_scroll" ref={handScrollContainer}></div>
        <p className="body1 text_wrapper">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo
          debitis blanditiis, rerum dolorum nihil quod eius rem ipsum laudantium
          cupiditate temporibus totam reiciendis quas? Eos explicabo molestias
          rerum voluptatum.
        </p>
        <p className="body1 content"></p>
      </section>
      {/* <MyFooter></MyFooter> */}
    </div>
  );
};

export default Home;
