import "../css/Home.css";
/* components */
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import Line from "../components/Line";
/* hooks */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

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
      <div
        className={[
          "home_background_wrapper",
          isTopZero ? "background_scroll_down" : "background_scroll_up",
        ].join(" ")}
      >
    </div>
      <section>
        <div className="main">
          <p className="h1 size_10 content">Moon Calendar</p>
          <p className="title1 content">
            (왜 이름을 moon Calendar로 했는지)
          </p>
          <p className="body1 content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi? eprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, ullam
            vel qui eius ea quo libero nesciunt id sequi. Libero debitis
            reprehenderit ullam iste, modi natus dolorum earum error animi?
          </p>
          <p className="body1 content"></p>
          <div className="temp"></div>
        </div>
      </section>
      {/* <MyFooter></MyFooter> */}
    </div>
  );
};

export default Home;
