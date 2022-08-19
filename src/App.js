import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import EditDiary from "./pages/EditDiary";
import React, { useReducer } from "react";

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
  return newState;
};

export const DiaryDispatchContext = React.createContext();
const App = () => {
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
    <DiaryDispatchContext.Provider value={{ onCreate }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/feedback" element={<Feedback></Feedback>}></Route>
            <Route path="/editDiary" element={<EditDiary></EditDiary>}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryDispatchContext.Provider>
  );
};

export default App;