/* components */
import MyFooter from "../components/MyFooter";
import MyHeader from "../components/MyHeader";
import Line from "../components/Line";
/* hooks */
import { useState, useEffect } from "react";

const Home = () => {
  /* for scroll */
  /* when scroll up -> show Header */
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [isTopZero, setisTopZero] = useState(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setisTopZero(prevScrollPos <= currentScrollPos);
    setPrevScrollPos(currentScrollPos);
    console.log(isTopZero);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, isTopZero, handleScroll]);

  return (
    <div className="Home">
      <MyHeader
        btn1Type="Feedback"
        btn1Text="Feedback"
        btn1Func={(e) => alert("Feedback clicked")}
        btn2Type="sign In"
        btn2Text="sign In"
        btn2Func={(e) => alert("sign clicked")}
      />

      <MyFooter></MyFooter>
    </div>
  );
};

export default Home;
