import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import EditDiary from "./pages/EditDiary";
import Calendar from "./pages/Calendar";
import FinDiary from "./pages/FinDiary";
import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  let newState = [];
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
    default:
      return state;
  }
  localStorage.setItem("diary", JSON.stringify(newState));
  return newState;
};

export const DiaryDispatchContext = React.createContext();
export const DiaryStateContext = React.createContext();

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

  /* CREATE */
  const onCreate = (title, date, who, weather, content) => {
    dispatch({
      type: "CREATE",
      data: {
        title,
        date,
        who,
        weather,
        content,
      },
    });
  };
  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home></Home>}></Route>
              <Route path="/feedback" element={<Feedback></Feedback>}></Route>
              <Route
                path="/editDiary/:date"
                element={<EditDiary></EditDiary>}
              ></Route>
              <Route
                path="/finDiary/:date"
                element={<FinDiary></FinDiary>}
              ></Route>
              <Route path="/calendar" element={<Calendar></Calendar>}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
