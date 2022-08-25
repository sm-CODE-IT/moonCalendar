import "../css/Feedback.css";
import { DiaryThemeStateContext } from "../App";
import axios from "axios";
/* components */
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import Line from "../components/Line";
import MyFooter from "../components/MyFooter";

/* util */
import useTheme from "../util/useTheme";
import { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";


// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   app.use(
//     '/feedback',
//     createProxyMiddleware({
//       target: 'list/getFeedbackListPage',
//       pathRewrite: {
//         '^/feedback': '',
//       },
//     }),
//   );
// }
// export const getData = async () => {
//   try {
//     const { data } = await axios.get("feedback/list");
//     console.log("data", data);
//   } catch (err) {
//     console.log(err);
//   }
// };

const Feedback = () => {
  /* for Plus button color */
  let { themeMode } = useContext(DiaryThemeStateContext);
  // console.log(localTheme);
  const plusButtonSrc = process.env.PUBLIC_URL + `/assets/${themeMode}Plus.png`;
  // console.log(plusButtonSrc);

  /* input 태그에 x 마크 넣으려고 */
  const [isWriting, setIsWriting] = useState(false);

  /* for input one (어떤 문제에 대한 피드백?) */
  const inputOneRef = useRef();
  const [inputOneContent, setInputOneContent] = useState("");

  /* for input two (상세 내용) */
  const inputTwoRef = useRef();
  const [inputTwoContent, setInputTwoContent] = useState("");

  /* for input four (이메일 주소를 입력) */
  const inputFourRef = useRef();
  const [inputFourContent, setInputFourContent] = useState("");

  /* for submit button */
  // const navigate = useNavigate();
  // const [isValid, setIsValid] = useState(true);
  // const handleSubmit = () => {
  //   var validRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  //   if (inputOneContent.length < 1) {
  //     inputOneRef.current.focus();
  //     return;
  //   }

  //   if (inputTwoContent.length < 1) {
  //     inputTwoRef.current.focus();
  //     return;
  //   }

  //   if (!validRegex.test(inputFourContent)) {
  //     inputFourRef.current.focus();
  //     setIsValid(false);
  //     return;
  //   }

  //   setIsValid(true);
  //   if (window.confirm("제출하시겠습니까?")) {
  //     navigate("/", { replace: true }); // 로그인 된 상태에서만 피드백을 들어갈 수 있으므로 이동 링크를 Calendar.js로 변경해야된다.
  //   }
  // };
  
  /* axios */
  const axios = require("axios");
  // const [dataState, setDataState] = useState();
  // 1
  // axios.defaults.withCredentials = true;
  // const GET_API_URL = "feedback/list";
  
  // // contents, title, email
  // function getUsers() {
  //   return axios.get(GET_API_URL);
  // }
  
  
  // function componentDidMount() {
  //   getUsers().then((response) => {
  //     console.log(response.data);
  //     // const data = response.data;
  //     // this.setDataState({data});
  //   });
  //   // setUsers(dbTitle, dbContents, dbEmail).then((response) => {
  //     //   setPostedData([])
  //     //   setDbTitle('');
  //     //   setDbContents('');
  //     //   setDbEmail('');
  //     // });
  //   }
  //   componentDidMount();

  /* push */
  const POST_API_URL = "/feedback/write";
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [image, setImage] = useState([]);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  const [isValid, setIsValid] = useState(true);
  const handleSubmit = (e) => {
    e.preventDefault();
    var validRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    if (inputOneContent.length < 1) {
      inputOneRef.current.focus();
      return;
    }

    if (inputTwoContent.length < 1) {
      inputTwoRef.current.focus();
      return;
    }

    if (!validRegex.test(inputFourContent)) {
      inputFourRef.current.focus();
      setIsValid(false);
      return;
    }

    setIsValid(true);
    console.log("before submit?", inputOneContent, inputTwoContent, inputFourContent);
    if (window.confirm("제출하시겠습니까?")) {
      setTitle(inputOneContent);
      setContents(inputTwoContent);
      setImage("");
      setEmail(inputFourContent);
      console.log("submit?", inputOneContent, inputTwoContent, inputFourContent)
      // setUsers(dbTitle, dbContents, dbImage, dbEmail);
      navigate("/", { replace: true }); // 로그인 된 상태에서만 피드백을 들어갈 수 있으므로 이동 링크를 Calendar.js로 변경해야된다.
    }
  };

  // function setUsers(dbTitle, dbContents, dbImage, dbEmail) {
  //   axios.post(POST_API_URL, {
  //     dbTitle,
  //     dbContents,
  //     dbImage,
  //     dbEmail,
  //   }.then((response) => console.log(response)));
  // }

  // const [title, setTitle] = useState('');
  // const [body, setBody] = useState('');
  // const [posts, setPosts] = useState([]);

  // const handlePush = (e) => {
  //     e.preventDefault();
  //     addPosts(title, body);
  //  };

  //  const addPosts = (title, body) => {
  //     axios
  //        .post(POST_API_URL, {
  //           title: title,
  //           body: body,
  //        })
  //        .then((response) => {
  //           setPosts([response.data, ...posts]);
  //        });
  //     setTitle('');
  //     setBody('');
  //  };

  // console.log("dataState", dataState);


  return (
    <div className="Feedback">
      <MyHeader
        btn1Type="short"
        btn1Text="Feedback"
        btn1Func={() => navigate("/feedback")}
        btn2Type="short"
        btn2Text="sign In"
        btn2Func={(e) => alert("sign clicked")}
      />

      <div className="main_wrapper">
        <div className="main">
          <div className="comment">
            <h1 className="h1">FeedBack</h1>
            <p className="caption">
              귀하의 귀중한 의견을 들려주십시오. 우리는 언제나 여러분의 의견을
              기다리고 있습니다.
            </p>
            <p className="caption alert">필수 항목은 *(으)로 표시합니다.</p>
          </div>
          <div className="input_box_wrapper">
            <div className="input_one">
              <p className="body1">어떤 문제에 대한 피드백이 있으십니까? *</p>
              <input
                type="text"
                className="input_box_one"
                placeholder="피드백을 입력해주세요"
                ref={inputOneRef}
                value={inputOneContent}
                onChange={(e) => setInputOneContent(e.target.value)}
              />
            </div>
            <div className="input_two">
              <p className="body1">상세 내용 *</p>
              <textarea
                type="text"
                className="input_box_two"
                placeholder="상세 내용을 입력해주세요"
                ref={inputTwoRef}
                value={inputTwoContent}
                onChange={(e) => setInputTwoContent(e.target.value)}
              ></textarea>
            </div>
            <div className="input_three">
              <p className="body1">상세 이미지</p>

              <label for="file_input" className="plus_button_wrapper">
                <img src={plusButtonSrc} alt="" className="plus_button" />
              </label>
              <input type="file" id="file_input" accept=".png, .jpg" />
            </div>

            <div className="input_four">
              <p className="body1">이메일 주소 *</p>
              {isValid ? (
                <></>
              ) : (
                <p className="caption alert">* ex. xxxxxxxx@xxxxx.xxx</p>
              )}
              <input
                type="email"
                className="input_box_four"
                placeholder="이메일 주소를 입력해주세요"
                ref={inputFourRef}
                value={inputFourContent}
                onChange={(e) => setInputFourContent(e.target.value)}
              />
            </div>
            <div className="myButton_wrapper">
              <MyButton
                text="Submit"
                type="long"
                onClick={handleSubmit}
              ></MyButton>
            </div>
          </div>
        </div>
      </div>
      <MyFooter></MyFooter>
    </div>
  );
};

export default Feedback;
