import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// pages
import Home from './pages/Home'
import Feedback from './pages/Feedback'
import EditDiary from './pages/EditDiary'
import Calendar from './pages/Calendar'
import React, { useReducer } from 'react'

import Signin from './pages/Signin'
import Signin_3 from './pages/Signin_3'
import SignupGroup from './pages/SignupGroup'
import Signup from './pages/Signup'
import Signup_3 from './pages/Signup_3'
import SigninGroup from './pages/SigninGroup'

import { motion } from 'framer-motion'

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
  return newState
}

export const DiaryDispatchContext = React.createContext()
const App = () => {
  const [data, dispatch] = useReducer(reducer, [])

  /* CREATE */
  const onCreate = (title, date, who, weather, content) => {
    dispatch({
      type: 'CREATE',
      data: {
        title,
        date,
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
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/feedback" element={<Feedback></Feedback>}></Route>
            <Route
              path="/editDiary/:date"
              element={<EditDiary></EditDiary>}
            ></Route>

            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/signingroup" element={<SigninGroup />} />
            <Route path="/signin_3" element={<Signin_3 />} />
            <Route path="/signupgroup" element={<SignupGroup />} />
            <Route path="/signup_3" element={<Signup_3 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DiaryDispatchContext.Provider>
  )
}

export default App
