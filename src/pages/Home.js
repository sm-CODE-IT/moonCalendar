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
        btn1Type="short"
        btn1Text="Feedback"
        btn1Func={(e) => navigator("/feedback")}
        btn2Type="short"
        btn2Text="sign In"
        btn2Func={(e) => alert("sign clicked")}
      />
      <div
        className={[
          "home_background_wrapper",
          isTopZero ? "background_scroll_down" : "background_scroll_up",
        ].join(" ")}
      ></div>
      <section>
        <div className="main">
          <Line weight={5} eachClassName={"home_line"}></Line>
          <Line weight={3} eachClassName={"home_line"}></Line>
          <p className="h3 content">
            Lorem ipsum dolor Lorem ipsum dolor sit amet Lorem ipsum dolor Lorem
            ipsum dolor sit amet
          </p>
          <p className="title1 content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit.
          </p>
          <Line weight={3} eachClassName={"home_line"}></Line>
          <p className="body1 content">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam
            veritatis, fugit perferendis aspernatur necessitatibus pariatur
            quibusdam, soluta hic repudiandae, atque impedit iusto corporis
            facilis at dolor quae voluptas non ullam!
          </p>
          <Line weight={3} eachClassName={"home_line"}></Line>
          <Line weight={5} eachClassName={"home_line"}></Line>
          <p className="body1 content">
            <br /> Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellat, veritatis repudiandae ipsam suscipit unde cumque at
            provident laborum iusto. Velit eligendi fugit maxime, harum animi
            vitae optio eos nesciunt soluta! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, est
            perspiciatis! Magnam, temporibus dolor. Exercitationem quaerat atque
            maxime quidem hic ipsa vel facere, adipisci soluta blanditiis
            delectus dolorum laudantium voluptatem? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Illo veritatis non eligendi veniam
            excepturi, officiis asperiores perferendis alias, assumenda nobis ab
            dolor esse quos! Natus quaerat nobis quae perferendis eius! <br />
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            delectus magni, accusamus officiis praesentium doloremque voluptatum
            sapiente perspiciatis consectetur adipisci ullam velit inventore
            libero nisi in recusandae? A, assumenda sit. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, est
            perspiciatis! Magnam, temporibus dolor. Exercitationem quaerat atque
            maxime quidem hic ipsa vel facere, adipisci soluta blanditiis
            delectus dolorum laudantium voluptatem? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Illo veritatis non eligendi veniam
            excepturi, officiis asperiores perferendis alias, assumenda nobis ab
            dolor esse quos! Natus quaerat nobis quae perferendis eius! <br />
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            delectus magni, accusamus officiis praesentium doloremque voluptatum
            sapiente perspiciatis consectetur adipisci ullam velit inventore
            libero nisi in recusandae? A, assumenda sit. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, est
            perspiciatis! Magnam, temporibus dolor. Exercitationem quaerat atque
            maxime quidem hic ipsa vel facere, adipisci soluta blanditiis
            delectus dolorum laudantium voluptatem? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Illo veritatis non eligendi veniam
            excepturi, officiis asperiores perferendis alias, assumenda nobis ab
            dolor esse quos! Natus quaerat nobis quae perferendis eius! <br />
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            delectus magni, accusamus officiis praesentium doloremque voluptatum
            sapiente perspiciatis consectetur adipisci ullam velit inventore
            libero nisi in recusandae? A, assumenda sit. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, est
            perspiciatis! Magnam, temporibus dolor. Exercitationem quaerat atque
            maxime quidem hic ipsa vel facere, adipisci soluta blanditiis
            delectus dolorum laudantium voluptatem? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Illo veritatis non eligendi veniam
            excepturi, officiis asperiores perferendis alias, assumenda nobis ab
            dolor esse quos! Natus quaerat nobis quae perferendis eius! <br />
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            delectus magni, accusamus officiis praesentium doloremque voluptatum
            sapiente perspiciatis consectetur adipisci ullam velit inventore
            libero nisi in recusandae? A, assumenda sit. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, est
            perspiciatis! Magnam, temporibus dolor. Exercitationem quaerat atque
            maxime quidem hic ipsa vel facere, adipisci soluta blanditiis
            delectus dolorum laudantium voluptatem? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Illo veritatis non eligendi veniam
            excepturi, officiis asperiores perferendis alias, assumenda nobis ab
            dolor esse quos! Natus quaerat nobis quae perferendis eius! <br />
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            delectus magni, accusamus officiis praesentium doloremque voluptatum
            sapiente perspiciatis consectetur adipisci ullam velit inventore
            libero nisi in recusandae? A, assumenda sit. Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! Lorem, ipsum dolor sit
            amet consectetur adipisicing elit. Nam veritatis, fugit perferendis
            aspernatur necessitatibus pariatur quibusdam, soluta hic
            repudiandae, atque impedit iusto corporis facilis at dolor quae
            voluptas non ullam! <br /> Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Repellat, veritatis repudiandae ipsam suscipit
            unde cumque at provident laborum iusto. Velit eligendi fugit maxime,
            harum animi vitae optio eos nesciunt soluta! <br /> <br />
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit, est
            perspiciatis! Magnam, temporibus dolor. Exercitationem quaerat atque
            maxime quidem hic ipsa vel facere, adipisci soluta blanditiis
            delectus dolorum laudantium voluptatem? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Illo veritatis non eligendi veniam
            excepturi, officiis asperiores perferendis alias, assumenda nobis ab
            dolor esse quos! Natus quaerat nobis quae perferendis eius! <br />
            <br /> <br />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa
            delectus magni, accusamus officiis praesentium doloremque voluptatum
            sapiente perspiciatis consectetur adipisci ullam velit inventore
            libero nisi in recusandae? A, assumenda sit.
          </p>
        </div>
      </section>

      <MyFooter></MyFooter>
    </div>
  );
};

export default Home;
