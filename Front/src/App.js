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
    case "REMOVE": {
      newState = state.filter((it) => it.date !== action.targetDate);
      break;
    }
    case "EDIT": {
      console.log({ ...action.data });
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
  const onCreate = (title, date, who, weather_id, content) => {
    dispatch({
      type: "CREATE",
      data: {
        title,
        date,
        who,
        weather_id,
        content,
      },
    });
  };
  /* REMOVE */
  const onRemove = (targetDate) => {
    dispatch({ type: "REMOVE", targetDate });
  };
  /* EDIT */
  const onEdit = (title, date, who, weather_id, content) => {
    dispatch({
      type: "EDIT",
      data: {
        title,
        date,
        who,
        weather_id,
        content,
      },
    });
  };
  return (
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
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
};

export default App;
