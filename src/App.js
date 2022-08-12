import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Feedback from "./pages/Feedback";
import EditDiary from "./pages/EditDiary";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/feedback" element={<Feedback></Feedback>}></Route>
          <Route path="/editDiary" element={<EditDiary></EditDiary>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
