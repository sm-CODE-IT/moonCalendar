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
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
  useScroll,
  useWillChange,
} from "framer-motion";
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

  /* motion */
  // TEXT animation
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

  // ICON
  const { themeMode } = useContext(DiaryThemeStateContext);
  const icon_1_Src = process.env.PUBLIC_URL + `/assets/${themeMode}First.png`;
  const icon_2_Src = process.env.PUBLIC_URL + `/assets/${themeMode}Second.png`;
  const icon_3_Src = process.env.PUBLIC_URL + `/assets/${themeMode}Third.png`;
  const icon_4_Src = process.env.PUBLIC_URL + `/assets/${themeMode}Fourth.png`;
  /* planet */
  const PlanetContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: PlanetContainer.current,
      renderer: "svg",
      rendererSettings: {
        mount: true,
      },
      loop: true,
      autoplay: true,
      animationData: require(`.././data/Planet.json`),
    });
  }, []);

  /* Rotate Circle */
  const CircleContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: CircleContainer.current,
      renderer: "svg",
      rendererSettings: {
        mount: true,
      },
      loop: true,
      autoplay: true,
      animationData: require(`.././data/rotate-circle.json`),
    });
  }, []);

  /* bg_space */
  const SpaceContainer = useRef();
  useEffect(() => {
    lottie.loadAnimation({
      container: SpaceContainer.current,
      renderer: "svg",
      rendererSettings: {
        mount: true,
        preserveAspectRatio: "none", // "xMidYMid slice",
      },
      loop: true,
      autoplay: true,
      animationData: require(`.././data/bg-space.json`),
    });
  }, []);

  /* 3D */
  const x = useMotionValue(200);
  const y = useMotionValue(200);
  const rotateX = useTransform(y, [0, 400], [45, -45]);
  const rotateY = useTransform(x, [0, 400], [-45, 45]);

  const handleMouse = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();

    x.set(event.clientX - rect.left);
    y.set(event.clientY - rect.top);
  };
  const { scrollYProgress } = useScroll();
  //console.log(scrollYProgress);

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
          "main_wrapper",
          isTopZero ? "background_scroll_down" : "background_scroll_up",
        ].join(" ")}
      > */}
      <div className="first_page_wrapper">
        <section>
          <div className="page page_front">
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
                Moon Calendar is a Web that can record your memories. Also, it
                can check the month's schedule at a glance
              </motion.div>
            </motion.div>
          </div>
        </section>
        <section>
          {/* <div
            className={[
              "page page_back",
              isTopZero ? "background_scroll_down" : "background_scroll_up",
            ].join(" ")}
          > */}
          <div className="incons_wrapper">
            <motion.div
              className="icon_wrapper icon_1_wrapper"
              animate={{
                y: [0, 10, 0],
                // scale: [1, 1.1, 1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                type: "spring",
                damping: 3,
                stiffness: 50,
              }}
              style={{ rotate: 25 }}
            >
              <motion.img
                src={icon_1_Src}
                alt=""
                className="logo_img logo_1_img"
              />
            </motion.div>
            <motion.div
              className="icon_wrapper icon_2_wrapper"
              animate={{
                y: [10, 0, 10],
                // scale: [1, 1.1, 1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                type: "spring",
                damping: 3,
                stiffness: 50,
              }}
              style={{ rotate: -25 }}
            >
              <motion.img src={icon_2_Src} alt="" className="logo_img" />
            </motion.div>
            <motion.div
              className="icon_wrapper icon_3_wrapper"
              animate={{
                y: [10, 0, 10],
                // scale: [1, 1.1, 1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                type: "spring",
                damping: 3,
                stiffness: 50,
              }}
            >
              <motion.img src={icon_3_Src} alt="" className="logo_img" />
            </motion.div>
            <motion.div
              className="icon_wrapper icon_4_wrapper"
              animate={{
                y: [0, 15, 0],
                // scale: [1, 1.1, 1, 0.9, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                type: "spring",
                damping: 3,
                stiffness: 50,
              }}
              style={{ rotate: 45 }}
            >
              <motion.img src={icon_4_Src} alt="" className="logo_img" />
            </motion.div>
            <div className="icon_5_wrapper" ref={PlanetContainer}></div>
            <div className="icon_6_wrapper" ref={CircleContainer}></div>
          </div>
          {/* </div> */}
        </section>
      </div>
      <div className="lottie_scroll" ref={handScrollContainer}></div>
      <div className="space_background_wrapper">
        <div className="space_background" ref={SpaceContainer}></div>
      </div>

      <p className="body1 text_wrapper">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, nemo
        debitis blanditiis, rerum dolorum nihil quod eius rem ipsum laudantium
        cupiditate temporibus totam reiciendis quas? Eos explicabo molestias
        rerum voluptatum. orem ipsum dolor sit amet consectetur adipisicing
        elit. Illum, nemo debitis blanditiis, rerum dolorum nihil quod eius rem
        ipsum laudantium cupiditate temporibus totam reiciendis quas? Eos
        explicabo molestias rerum voluptatum.orem ipsum dolor sit amet
        consectetur adipisicing elit. Illum, nemo debitis blanditiis, rerum
        dolorum nihil quod eius rem ipsum laudantium cupiditate temporibus totam
        reiciendis quas? Eos explicabo molestias rerum voluptatum.orem ipsum
        dolor sit amet consectetur adipisicing elit. Illum, nemo debitis
        blanditiis, rerum dolorum nihil quod eius rem ipsum laudantium
        cupiditate temporibus totam reiciendis quas? Eos explicabo molestias
        rerum voluptatum.
      </p>

      <p className="body1 content"></p>
      {/* <MyFooter></MyFooter> */}
      {/* </div> */}
    </div>
  );
};

export default Home;
