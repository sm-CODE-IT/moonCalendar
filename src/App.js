import React, { useEffect, useReducer, useRef } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'

import Calendar from './pages/Calender'
import EditDiary from './pages/EditDiary'

const reducer = (state, action) => {
  let newState = []
  switch (action.type) {
    case 'INIT': {
      return action.data
    }
    case 'CREATE': {
      const newItem = {
        ...action.data,
      }
      newState = [newItem, ...state]
      break
    }
    default:
      return state
  }
}
export const DiaryDispatchContext = React.createContext()
function App() {
  const [data, dispatch] = useReducer(reducer, [])

  /* CREATE */
  const onCreate = (
    title,
    isSameDay,
    startDate,
    endDate,
    who,
    weather,
    content
  ) => {
    dispatchEvent({
      type: 'CREATE',
      data: {
        title,
        isSameDay,
        startDate,
        endDate,
        who,
        weather,
        content,
      },
    })
  }
  return (
    <DiaryDispatchContext.Provider value={{ onCreate }}>
      <BrowserRouter>
        <div className="App">
          <Routes location={window.location}>
            <Route path="/" element={<Calendar />} />
            <Route
              path="/editDiary/:date"
              element={<EditDiary></EditDiary>}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryDispatchContext.Provider>
  )
}

export default App
