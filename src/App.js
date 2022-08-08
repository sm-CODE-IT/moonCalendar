import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/feedback" element={<Feedback></Feedback>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
