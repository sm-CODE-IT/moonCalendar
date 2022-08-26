import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import NewDiary from "./pages/NewDiary";
import Calendar from "./pages/Calendar";
import FinDiary from "./pages/FinDiary";
import EditDiary from "./pages/EditDiary";
import List from "./pages/List";
import Signin from './pages/Signin'
import Signin_3 from './pages/Signin_3'
import SignupGroup from './pages/SignupGroup'
import Signup from './pages/Signup'
import Signup_3 from './pages/Signup_3'
import SigninGroup from './pages/SigninGroup'
import React, { useReducer, useEffect, useState } from "react";

const reducer = (state, action) => {
  let newState = [];
  let themeState = "";
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {
        ...action.data,
      };
      newState = [newItem, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.date !== action.targetDate);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.date === action.data.date ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

// localStorage.clear();
export const DiaryDispatchContext = React.createContext();
export const DiaryStateContext = React.createContext();
export const DiaryThemeStateContext = React.createContext();

const App = () => {
  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData);

      if (diaryList.length >= 1) {
        dispatch({ type: "INIT", data: diaryList });
      }
    } else {
      dispatch({ type: "INIT", data: [] });
    }
  }, []);

  const [data, dispatch] = useReducer(reducer, []);
  const [themeMode, setThemeMode] = useState(localStorage.getItem("theme"));

  /* CREATE */
  const onCreate = (title, date, who, weather_id, content, contentRaw) => {
    const jsonRaw = JSON.stringify(contentRaw);
    console.log("App", jsonRaw);
    dispatch({
      type: "CREATE",
      data: {
        title,
        date,
        who,
        weather_id,
        content,
        contentRaw,
      },
    });
  };
  /* REMOVE */
  const onRemove = (targetDate) => {
    dispatch({ type: "REMOVE", targetDate });
  };
  /* EDIT */
  const onEdit = (title, date, who, weather_id, content, contentRaw) => {
    // const jsonRaw = JSON.stringify(contentRaw);
    dispatch({
      type: "EDIT",
      data: {
        title,
        date,
        who,
        weather_id,
        content,
        contentRaw,
      },
    });
  };

  return (
    <DiaryThemeStateContext.Provider value={{ themeMode, setThemeMode }}>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onRemove, onEdit }}>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/feedback" element={<Feedback></Feedback>}></Route>
                <Route path="/list" element={<List></List>}></Route>
                <Route
                  path="/newDiary/:date"
                  element={<NewDiary></NewDiary>}
                ></Route>
                <Route
                  path="/finDiary/:date"
                  element={<FinDiary></FinDiary>}
                ></Route>
                <Route
                  path="/editDiary/:date"
                  element={<EditDiary></EditDiary>}
                ></Route>
                <Route path="/calendar" element={<Calendar></Calendar>}></Route>
                <Route path="/signin" element={<Signin />} />
                <Route path="/signingroup" element={<SigninGroup />} />
                <Route path="/signin_3" element={<Signin_3 />} />
                <Route path="/signupgroup" element={<SignupGroup />} />
                <Route path="/signup_3" element={<Signup_3 />} />
              </Routes>
            </div>
          </BrowserRouter>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </DiaryThemeStateContext.Provider>
  );
};

export default App;
